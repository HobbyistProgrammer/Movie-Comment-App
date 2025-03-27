# Movie Comment App
This project is to demonstrate the application of JavaScript + React + Google Firebase to create a responsive web application that users can register, login, view movie titles, add/edit/delete comments.

# Installation
## Prerequisite Installation
Before running the project, make sure you have the following software installed on your machine:

### 1. **Node.js & npm**
This project requires Node.js and npm (Node Package Manager) to install dependencies and run both the frontend and backend.

- **Download Node.js**: [https://nodejs.org](https://nodejs.org)

### 2. **Firebase Account**
You need a Firebase account to set up the Firebase Admin SDK and manage authentication and database services.

- **Create a Firebase account**: [https://firebase.google.com](https://firebase.google.com)
- **Create a Firebase project**: You can create a new project in the Firebase console if you don't already have one.

## Linking the Project to Firebase
To link your project to Firebase and retrieve the necessary `firebaseConfig`, follow these steps:

### 1. **Create or Use an Existing Firebase Project**
If you don't already have a Firebase project, you can create one:

- Go to the Firebase Console: [https://console.firebase.google.com](https://console.firebase.google.com).
- Click **Add Project** or select an existing project.

### 2. **Set Up Firebase Authentication**
To enable user authentication (if you're using Firebase for auth), follow these steps:

1. In the Firebase Console, navigate to the **Authentication** section.
2. Enable the desired sign-in methods (e.g., Email/Password, Google, etc.).

### 3. **Get Firebase Config for Frontend (Web App)**
To connect your frontend (React) to Firebase, you need the `firebaseConfig`. Here’s how to retrieve it:

1. Go to the Firebase Console.
2. In the left sidebar, click on **Project Settings** (gear icon next to your project name).
3. Scroll down to the **Your apps** section.
4. Click on the **</> Web** icon to set up Firebase for a web app.
5. Firebase will provide you with the `firebaseConfig` object that you can put into a file named firebase.jsx:

	```JavaScript
		import { initializeApp } from "firebase/app";
		import { getAuth } from "firebase/auth";

		const firebaseConfig = {
		  apiKey: "<your-api-key>",
		  authDomain: "<your-auth-domain>",
		  projectId: "<your-project-id>",
		  storageBucket: "<your-storage-bucket>",
		  messagingSenderId: "<your-messaging-sender-id>",
		  appId: "<your-app-id>"
		};

		// Initialize Firebase
		const app = initializeApp(firebaseConfig);
		const auth = getAuth(app);

		export { auth };
    ```
6. Create a file named firebase.jsx and place the file in a folder at:
```
frontend
│   ├── public/
│   └── src/
│       ├── components
│       ├── context
│       ├── utils
│           └── firebase.jsx <---
├── package-lock.json
├── package.json
├── postcss.config.js
└── tailwind.config.js

```

### 4. **Firebase Admin SDK**
To authenticate users and interact with Firebase services in your backend, you need to set up Firebase Admin SDK.

- **Generate Firebase Admin credentials**:
    1. Go to the Firebase Console: [https://console.firebase.google.com](https://console.firebase.google.com).
    2. In your Firebase project, navigate to the **Service Accounts** section.
    3. Click **Generate New Private Key** to download the file and rename to `firebase-admin.json`.
    4. Place the `firebase-admin.json` file in the root of your project (where `server.js` is located).
    5. Ensure your `.gitignore` includes the `firebase-admin.json` file so it isn't pushed to GitHub or made public.

```
backend
├── firebase-admin.json
├── package-lock.json
├── package.json
└── server.js
```

### 5. **Frontend Installation**
- Navigate to the frontend directory:
```bash
    cd frontend
```
- Install the required dependencies for the frontend:
```bash
    npm install
```
- After the installation is complete, start the frontend development server:
```bash
    npm run start
```
   This will start the frontend app at `http://localhost:3000`.

### 6. **Backend Installation**
- Navigate to the backend directory:
```bash
    cd backend
```
- Install the required dependencies for the backend:
```bash
    npm install
```
- Start the backend server:
```bash
    node server.js
```
   This will start the backend server at `http://localhost:5000`.
## Deployment

To deploy this project run:

For the frontend:
```bash
  npm run start
```

For the backend:
```bash
  node server.js
```
## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

## Technologies Used
This project is built using the following technologies:

### Frontend
- **React**: JavaScript library for building user interfaces. It enables the development of dynamic, single-page applications (SPAs).
- **React Router**: A standard library for routing in React. It allows navigation between different components (pages) in the app.
- **Firebase Authentication**: Provides user authentication services, including registration, login, and session management.

### Backend
- **Node.js**: A JavaScript runtime used for building the server-side of the application.
- **Express.js**: A minimalist web framework for Node.js that simplifies routing and server-side logic.
- **Firebase Admin SDK**: Used for interacting with Firebase services, such as authentication and Firestore database, on the server-side.

### Tools & Libraries
- **npm**: A package manager for JavaScript used to manage the project's dependencies.
- **Cors**: A package that allows the server to handle cross-origin requests, enabling frontend-backend communication across different domains.
