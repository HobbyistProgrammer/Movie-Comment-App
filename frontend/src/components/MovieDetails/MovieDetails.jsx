import React, { useEffect, useState, useRef } from "react";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

import { useLocation, useNavigate } from "react-router-dom";

const MovieDetails = () => {

    const [comments, setComments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newComment, setNewComment] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state?.data;

    // This is to prevent the function from being executed twice.
    // Error occurs with the function being executed twice.
    const hasInitialized = useRef(false);

    const fetchComments = async () => {

        const querySnapshot = await getDocs(collection(db, "comments"));
        
        querySnapshot.forEach((doc) => {
            if(doc.get("commentID") === movie.id.toString()) {
                setComments(old => [...old, doc.data()]);
            }
        });
    }

    useEffect(() => {
        if (!hasInitialized.current) {
            fetchComments();
            hasInitialized.current = true;
        }
    }, []);

    const handleAddComment = async () => {
        // Add comment functionality
        // This function should add a comment to the comments collection in Firestore.
        try {
            await addDoc(collection(db, "comments"), {
                commentID: movie.id.toString(),
                comment: newComment,
                createdAt: new Date()
            });

            setNewComment("");
            setShowModal(false);
            setComments([]);
            fetchComments();
        } catch (err) {
            console.error(err);
        }
    }

    // TODO: Implment tokens for user authentication.

    // TODO: Implement delete comment functionality.

    // TODO: Implement edit comment functionality.

    return (
        <>
            { /* Back Button & Add Comment Button */ }
            <button onClick={ () => navigate(-1)} className="bg-blue-500 hover:bg-blue-600 text-white text-sm ml-6 font-medium px-3 py-1.5 rounded-md shadow-sm transition">Back</button>
            <button onClick={ () => setShowModal(true) } className="bg-blue-500 hover:bg-blue-600 text-white text-sm ml-4 font-medium px-3 py-1.5 rounded-md shadow-sm transition">Add Comment</button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
                {/* Left Side: Movie Column*/}
                <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <img src={movie.image} alt={movie.title} className="w-full md:w-64 h-auto object-cover" />
                        <div className="p-6">
                            <h3 className="text-3xl font-semibold mb-2">{movie.title}</h3>
                            <p className="text-gray-700 mb-1"><strong>Director:</strong> {movie.director}</p>
                            <p className="text-gray-700 mb-1"><strong>Year:</strong> {movie.year}</p>
                            <p className="text-gray-700 mb-1"><strong>Genre:</strong> {movie.genre}</p>
                            <p className="text-gray-700 mb-1"><strong>Runtime:</strong> {movie.runtime}</p>
                            <p className="text-gray-700 mb-1"><strong>Rating:</strong> {movie.rating}</p>
                        </div>
                    </div>
                </div>

                {/* Right Side : Comments Column*/}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Comments</h3>
                        { comments.length > 0 ? comments.map((comment, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
                                <p className="text-gray-700 font-semibold"> {new Date( comment.createdAt.seconds * 1000).toLocaleString() }</p>
                                <p className="text-gray-700">{comment.comment}</p>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-sm transition">Delete</button>
                            </div>
                        )) : 
                            <p>No comments yet.</p>
                        }
                    </div>
                </div>
                
            </div>

            { showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-2xl font-semibold mb-4">Add Comment</h3>
                        <textarea 
                            className="w-full h-24 p-2 border border-gray-300 rounded-md mb-4"
                            placeholder="Enter your comment here..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end">
                            <button onClick={ handleAddComment } className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm transition">Add Comment</button>
                            <button onClick={ () => setShowModal(false) } className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 ml-4 rounded-md shadow-sm transition">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieDetails;