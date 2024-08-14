import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/PaidCustomer.css';
import Navbar from './AdminNavbar';

const PaidCustomers = () => {
    const [applications, setApplications] = useState([]);
    const [payments, setPayments] = useState([]);
    const [paidCustomers, setPaidCustomers] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://localhost:8091/GetAllPaidCustomer');
                setApplications(response.data);
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:8091/GetAllPayment');
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchApplications();
        fetchPayments();
    }, []);

    useEffect(() => {
        if (applications.length > 0 && payments.length > 0) {
            const paidCustomerNames = payments.map(payment => payment.name);
            const paidCustomers = applications.filter(application => 
                paidCustomerNames.includes(application.name)
            );
            setPaidCustomers(paidCustomers);
        }
    }, [applications, payments]);

    return (
        <div>
            <Navbar/>
            <div className="paid-customers-container">
                <h2>Paid Customers</h2>
                {paidCustomers.length > 0 ? (
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
                            {paidCustomers.map((customer, index) => (
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
                ) : (
                    <p>No paid customers found.</p>
                )}
            </div>
        </div>
    );
};

export default PaidCustomers;
