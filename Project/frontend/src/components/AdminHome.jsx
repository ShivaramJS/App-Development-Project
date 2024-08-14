import React from 'react';
import Navbar from './AdminNavbar';
import "../CSS/AdminHome.css";

const AdminHome = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1>Welcome to the Admin Dashboard!</h1>
      <p>You're successfully logged in as an administrator.</p>
      
      <div className="dashboard-overview">
        <h2>Dashboard Overview</h2>
        <div className="overview-cards">
          <div className="card">
            <h3>Total Policies</h3>
            <p>5,432</p>
          </div>
          <div className="card">
            <h3>New Applications</h3>
            <p>128</p>
          </div>
          <div className="card">
            <h3>Pending Claims</h3>
            <p>45</p>
          </div>
          <div className="card">
            <h3>Active Users</h3>
            <p>3,276</p>
          </div>
        </div>
      </div>
      
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>Policy #12345 was updated by John Doe.</li>
          <li>New application received from Jane Smith.</li>
          <li>Claim #98765 was approved.</li>
          <li>User Michael Brown was added to the system.</li>
        </ul>
      </div>
      
      <div className="system-notifications">
        <h2>System Notifications</h2>
        <p>No new notifications at the moment.</p>
      </div>
      
      <div className="admin-reports">
        <h2>Admin Reports</h2>
        <div className="report-cards">
          <div className="report-card">
            <h3>Monthly Policy Report</h3>
            <p>A detailed report on all policies issued this month.</p>
            <button onClick={() => handleAction('monthly-report')}>View Report</button>
          </div>
          <div className="report-card">
            <h3>User Engagement Report</h3>
            <p>Insights into user activity and engagement levels.</p>
            <button onClick={() => handleAction('user-engagement')}>View Report</button>
          </div>
          <div className="report-card">
            <h3>Claim Approval Statistics</h3>
            <p>Statistics on the number of claims approved, pending, and denied.</p>
            <button onClick={() => handleAction('claim-stats')}>View Report</button>
          </div>
        </div>
      </div>
      
      <div className="system-updates">
        <h2>System Updates</h2>
        <ul>
          <li>Version 2.1.0 was deployed on August 12, 2024.</li>
          <li>New security patches applied to the user authentication module.</li>
          <li>Performance improvements in the claims processing system.</li>
          <li>Bug fixes related to policy document uploads.</li>
        </ul>
      </div>
      
    </div>
  );
};

const handleAction = (action) => {
  console.log(`${action} clicked`);
  // Implement the action logic here
};

export default AdminHome;