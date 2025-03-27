require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const admin = require("firebase-admin");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

// Initialize Firebase Admin SDK
const serviceAccount = require("./firebase-admin.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://movie-comment-app-default-rtdb.firebaseio.com"
});

// Middleware to verify Firebase ID token
app.post("/login", async (req, res) => {

    const { token } = req.body;

    try {
        const user = await admin.auth().verifyIdToken(token);
        //const customToken = await admin.auth().createCustomToken(user.uid);

        const idToken = token;

        res.cookie('token', idToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 60 * 60 * 1000, // 1 hour
        });

        res.status(200).json({ message: "Login successful", uid: user.uid });

        // const decodedToken = await admin.auth().verifyIdToken(token);

        // res.cookie("token", token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === "production",
        //     sameSite: "Strict",
        //     maxAge: 60 * 60 * 1000, // 1 hour
        // });

        // res.json({ message: "Login successful", uid: decodedToken.uid });
    } catch (error) {
        console.log("Error verifying token: ", error);
        return res.status(401).json({ error: "Unauthorized" });
    }
});

app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logout successful" });
});

app.get("/protected", async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: "woowoo Unauthorized" });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.json({ message: "Protected route accessed", uid: decodedToken.uid });
    } catch (error) {
        console.log("Error verifying token: ", error);
        return res.status(401).json({ error: "uwy Unauthorized" });
    }
});

app.get('/check-auth', async (req, res) => {
    const token = req.cookies.token;  // Look for the token in cookies

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });  // No token found
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.status(200).json({ message: "User is authenticated", user: decodedToken });
    } catch (error) {
        console.log("Error verifying token: ", error);
        res.status(401).json({ error: "Unauthorized" });  // Token invalid
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));