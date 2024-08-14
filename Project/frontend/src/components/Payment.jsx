import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Payment.css';
import Navbar from './Navbar';

const Payment = ({ applicantName, onPaymentSuccess }) => {
    const [paymentData, setPaymentData] = useState({
        name: applicantName || '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8091/Payment/insert', paymentData);
            if (response.status === 200) {
                alert('Payment successful');
                onPaymentSuccess();
            } else {
                alert('Payment failed');
            }
        } catch (error) {
            console.error('Error during payment:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="payment-portal-container">
                <h2 style={{ color: "black" }}>Payment for {applicantName}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={paymentData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Card Number:
                        <input
                            type="text"
                            name="cardNumber"
                            value={paymentData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Expiry Date:
                        <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            required
                        />
                    </label>
                    <label>
                        CVV:
                        <input
                            type="text"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button className="payment-button" type="submit">Submit Payment</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
