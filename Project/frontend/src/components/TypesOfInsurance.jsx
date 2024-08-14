import React, { useState, useEffect } from 'react';
import '../CSS/TypesOfInsurance.css';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TypesOfInsurance = () => {
    const navigate = useNavigate();
    const [insuranceTypes, setInsuranceTypes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8091/GetAllInsuranceType')
            .then(response => {
                setInsuranceTypes(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="insurance-card-container" onClick={() => { navigate("/ApplyForInsurance") }}>
                {insuranceTypes.map((insurance) => (
                    <div key={insurance.id} className="insurance-card">
                        <div className="icon-container">
                            <img src={insurance.icon} alt={`${insurance.type} icon`} className="insurance-icon" />
                        </div>
                        <div className="insurance-details">
                            <h2 className="insurance-title">{insurance.type}</h2>
                            <p className="insurance-description">{insurance.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TypesOfInsurance;
