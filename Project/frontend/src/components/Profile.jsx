import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/Profile.css';
import Navbar from './Navbar';

const Profile = () => {
    const { userId } = useParams(); // Assuming the userId is passed via the route
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the user's data from the server
        fetch(`http://localhost:8000/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUserData(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <div className="profile-card">
                    <h2>{userData.username}'s Profile</h2>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Registered Insurance:</strong> {userData.insuranceType}</p>
                    <p><strong>Payment Status:</strong> {userData.paymentStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
