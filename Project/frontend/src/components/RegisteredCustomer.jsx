import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/RegisteredCustomer.css';
import Navbar from './AdminNavbar';

const RegisteredCustomer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:8091/GetAllPaidCustomer');
                if (response.status === 200) {
                    setCustomers(response.data);
                } else {
                    alert('Failed to fetch customer data');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="registered-customers-container">
                <h2>Registered Customers</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Insurance Type</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address}</td>
                                <td>{customer.dob}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisteredCustomer;
