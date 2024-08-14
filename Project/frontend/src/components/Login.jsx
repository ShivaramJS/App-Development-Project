import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../components/context/AuthContext';
import '../CSS/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
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

    // Basic validation
    if (formData.email && formData.password) {
      try {
        // Fetch users from JSON server using axios
        const response = await axios.post('http://localhost:8091/api/users/login',formData);
        const users = response.data;


        if (users) {
          login(); // Call the login function from AuthContext

          if (formData.email === 'admin@example.com') {
            navigate('/admin-home'); // Redirect to the admin home page
          } else {
            navigate('/'); // Redirect to the regular home page
          }
        } else {
          setError('Invalid email or password');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      }
    } else {
      setError('Both email and password are required');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="register-link">
        <p>Don't have an account? <a onClick={() => navigate('/register')}>Create one</a></p>
      </div>
    </div>
  );
};

export default Login;
