import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './components/context/AuthContext.jsx';
import TypesOfInsurance from './components/TypesOfInsurance.jsx';
import ApplyForInsurance from './components/ApplyForInsurance.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import Payment from './components/Payment.jsx'
import AdminHome from './components/AdminHome.jsx'
import ReadFeedback from './components/ReadFeedback.jsx';
import AddRemoveInsurance from './components/AddRemoveInsurance.jsx';
import Returns from './components/Returns.jsx';
import RegisteredCustomer from './components/RegisteredCustomer.jsx';
import PaidCustomers from './components/PaidCustomer.jsx';
import Profile from './components/Profile.jsx';
import Contact from './components/Contact.jsx';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/types-of-insurance"
            element={
              <ProtectedRoute>
                <TypesOfInsurance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ApplyForInsurance"
            element={
              <ProtectedRoute>
                <ApplyForInsurance/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedbackform"
            element={
              <ProtectedRoute>
                <FeedbackForm/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-home"
            element={
              <ProtectedRoute>
                <AdminHome/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/read-feedback"
            element={
              <ProtectedRoute>
                <ReadFeedback/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/returns"
            element={
              <ProtectedRoute>
                <Returns/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-remove-insurance"
            element={
              <ProtectedRoute>
                <AddRemoveInsurance/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/registered-customer"
            element={
              <ProtectedRoute>
                <RegisteredCustomer/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/paid-customer"
            element={
              <ProtectedRoute>
                <PaidCustomers/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
