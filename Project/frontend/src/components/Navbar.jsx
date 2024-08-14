import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Drawer, IconButton, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../CSS/Navbar.css';

const Navbar = () => {
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
    { text: 'Home', path: '/' },
    { text: 'Profile', path: '/profile' },
    { text: 'Insurance', path: '/types-of-insurance' },
    { text: 'Feedback', path: '/feedbackform' },
    { text: 'Payment', path: '/payment' },
    { text: 'Returns', path: '/returns' },
  ];

  return (
    <nav className="navbar">
      <div className="left-section">
        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </div>

        <h2>Life Insurance Portal</h2>
      <div className="right-section">
        <Button color="inherit" onClick={() => navigate('/')}>
          Home
        </Button>
        {isLoggedIn && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>

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
    </nav>
  );
};

export default Navbar;
