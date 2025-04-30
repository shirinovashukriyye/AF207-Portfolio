import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [anchor, setAnchor] = useState(null);
  const { currentUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const openMenu = (e) => setAnchor(e.currentTarget);
  const closeMenu = () => setAnchor(null);

  const exit = () => {
    logoutUser();
    closeMenu();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component={Link} to="/" variant="h6" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          MyStore
        </Typography>
        <Button component={Link} to="/products" color="inherit">Products</Button>
        <Button onClick={openMenu} color="inherit">Account</Button>
        <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
          {!currentUser ? (
            <>
              <MenuItem onClick={() => { navigate('/login'); closeMenu(); }}>Login</MenuItem>
              <MenuItem onClick={() => { navigate('/register'); closeMenu(); }}>Register</MenuItem>
            </>
          ) : (
            <MenuItem onClick={exit}>Logout</MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
