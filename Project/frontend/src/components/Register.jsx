import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, password, email } = formData;

    if (firstname && lastname && password && email) {
      try {
        const response = await axios.post('http://localhost:8091/api/users/register', formData);

        if (response.status === 201 || response.status === 200) {
          alert('Registration successful');
          navigate('/login');
        } else {
          setError('Failed to register. Please try again.');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      }
    } else {
      setError('All fields are required');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
