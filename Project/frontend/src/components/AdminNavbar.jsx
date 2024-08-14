import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../CSS/Navbar.css';

const AdminNavbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/admin-home' },
    { text: 'Update Insurance', path: '/add-remove-insurance' },
    { text: 'Read Feedback', path: '/read-feedback' },
    { text: 'Registered Customers', path: '/registered-customer' },
    { text: 'Paid Customers', path: '/paid-customer' },
  ];

  return (
    <nav className="navbar">
      <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: 250, flexShrink: 0, '& .MuiDrawer-paper': { width: 250 } }}
      >
        <List>
          <br></br>
          <br></br>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => navigate(item.path)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          {isLoggedIn && (
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          )}
          {!isLoggedIn && (
            <>
              <ListItem button onClick={() => navigate('/login')}>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button onClick={() => navigate('/register')}>
                <ListItemText primary="Register" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
      <h2 style={{marginRight:"80vh"}}>Life Insurance Portal</h2>

    </nav>
  );
};

export default AdminNavbar;
