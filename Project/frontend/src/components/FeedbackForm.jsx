import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/FeedbackForm.css";
import Navbar from './Navbar';

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8091/Feedback/insert', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                alert('Feedback submitted successfully');
                setSubmitted(true);
                setFormData({ name: '', email: '', feedback: '' });
            } else {
                alert('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="feedback-form-container">
                <h2 style={{marginLeft:"1vh"}}>Submit Your Feedback</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Feedback:
                        <textarea
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button className="feedback-button" type="submit">Submit Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
