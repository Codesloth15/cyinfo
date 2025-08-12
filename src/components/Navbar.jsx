import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: '#171a21',
        height: '100%',
        color: '#c7d5e0',
        p: 2,
        width: 250
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, color: '#66c0f4', fontWeight: 'bold' }}>
        CY
      </Typography>
      <Divider sx={{ borderColor: '#2a475e', mb: 2 }} />
      <List>
        {pages.map((page) => (
          <ListItem
            button
            key={page.name}
            component={NavLink}
            to={page.path}
            onClick={() => setMobileOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? '#66c0f4' : '#c7d5e0',
              fontWeight: isActive ? 'bold' : 'normal',
              textTransform: 'uppercase',
              fontSize: '0.85rem'
            })}
          >
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed" // <-- this makes navbar fixed on scroll
        sx={{
          backgroundColor: '#171a21',
          borderBottom: '1px solid #2a475e',
          boxShadow: 'none',
          px: { xs: 1, sm: 2 }
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: 48, justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <Typography
            variant="h6"
            sx={{
              color: '#66c0f4',
              fontWeight: 'bold',
              textDecoration: 'none',
              ml: 2
            }}
            component={NavLink}
            to="/"
          >
            CY
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={NavLink}
                to={page.path}
                style={({ isActive }) => ({
                  color: isActive ? '#66c0f4' : '#c7d5e0',
                  fontWeight: isActive ? 'bold' : 'normal',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem'
                })}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#c7d5e0' }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // better mobile performance
        }}
        PaperProps={{
          sx: { backgroundColor: '#171a21' }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
