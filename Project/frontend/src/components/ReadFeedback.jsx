import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/ReadFeedback.css';
import Navbar from './AdminNavbar';

const ReadFeedback = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await axios.get('http://localhost:8091/GetAllFeedback');
                if (response.status === 200) {
                    setFeedback(response.data);
                } else {
                    alert('Failed to fetch feedback data');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        };

        fetchFeedback();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="feedback-list-container">
                <h2>Feedback from Customers</h2>
                <ul className="feedback-list">
                    {feedback.map((item, index) => (
                        <li key={index} className="feedback-item">
                            <h3>{item.name}</h3>
                            <p><strong>Email:</strong> {item.email}</p>
                            <p>{item.feedback}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ReadFeedback;
