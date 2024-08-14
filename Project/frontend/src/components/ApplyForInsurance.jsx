import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/ApplyForInsurance.css';
import Navbar from './Navbar';

const ApplyForInsurance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [insuranceTypes, setInsuranceTypes] = useState([]);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    axios.get('http://localhost:8091/GetAllInsuranceType')
      .then((response) => setInsuranceTypes(response.data))
      .catch((error) => console.error('Error fetching insurance types:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8091/PaidCustomer/insert', formData);
      if (response.status === 200) {
        alert('Application submitted successfully');
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', address: '', dob: '' });
      } else {
        alert('Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="apply-insurance-container">
        <h2>Apply for Insurance</h2>
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
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Insurance:
            <select
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            >
              <option value="">Select Insurance</option>
              {insuranceTypes.map((address) => (
                <option key={address.id} value={address.type}>
                  {address.type}
                </option>
              ))}
            </select>
          </label>
          <br></br>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              max={today}
            />
          </label>
          <button className="afibutton" type="submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForInsurance;
