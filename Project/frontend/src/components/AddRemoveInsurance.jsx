import React, { useState, useEffect } from 'react';
import '../CSS/AddRemoveInsurance.css';
import Navbar from './AdminNavbar';
import axios from 'axios';

const AddRemoveInsurance = () => {
    const [insuranceTypes, setInsuranceTypes] = useState([]);
    const [formData, setFormData] = useState({
        type: '',
        description: '',
        icon: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8091/GetAllInsuranceType')
            .then(response => {
                setInsuranceTypes(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAddInsurance = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8091/InsuranceType/insert', formData)
            .then(response => {
                setInsuranceTypes([...insuranceTypes, response.data]);
                setFormData({
                    type: '',
                    description: '',
                    icon: ''
                });
            })
            .catch(error => {
                console.error('Error adding insurance:', error);
            });
    };

    const handleRemoveInsurance = (id) => {
        axios.delete(`http://localhost:8091/DeleteInsuranceType/${id}`)
            .then(() => {
                setInsuranceTypes(insuranceTypes.filter(insurance => insurance.id !== id));
            })
            .catch(error => {
                console.error('Error removing insurance:', error);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="insurance-card-container">
                {insuranceTypes.map((insurance) => (
                    <div key={insurance.id} className="insurance-card">
                        <div className="icon-container">
                            <img src={insurance.icon} alt={`${insurance.type} icon`} className="insurance-icon" />
                        </div>
                        <div className="insurance-details">
                            <h2 className="insurance-title">{insurance.type}</h2>
                            <p className="insurance-description">{insurance.description}</p>
                            <button onClick={() => handleRemoveInsurance(insurance.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <form className="add-insurance-form" onSubmit={handleAddInsurance}>
                <input 
                    type="text"
                    name="type"
                    placeholder="Type" 
                    
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="description"
                    placeholder="Description" 
                
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="icon"
                    placeholder="Icon URL" 
                 
                    onChange={handleChange} 
                />
                <button type="submit">Add Insurance</button>
            </form>
        </div>
    );
};

export default AddRemoveInsurance;
