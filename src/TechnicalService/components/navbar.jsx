import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../../../public/logo.png"
import { Link } from 'react-router-dom';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';
import { useAuthStatus } from '../../hooks/useAuthStatus';

const drawerWidth = 240;
const navItems = ['About', 'Service', 'Contact'];

export const Navbar = (props) => {

  const dispatch = useDispatch();

    const {displayName} = useAuthStatus();

  const onLogout = () => {
    dispatch(startLogout());
  }

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const handleNavClick = () => {
      setTimeout(() => {
        setMobileOpen(false);
      }, 150)
    }
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
        <Box component={Link} to="/" onClick={handleNavClick} sx={{display: "inline-block", mb: 1}}>
          <img src={logo} className='h-10' alt="logo"/>
        </Box>

        { displayName && (
          <Typography variant="body1" sx={{ fontWeight: "500", color: "text.secondary", mb: "1"}}>Hola {displayName}👋</Typography>
        )}

        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton component={Link} to={`/${item.toLowerCase()}`} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
              <ListItemButton onClick={onLogout} sx={{ justifyContent: "center", color: "error.main" }}>
                <IconButton color="inherit">
                  <LogoutOutlined />
                </IconButton>
              </ListItemButton>
            </ListItem>
        </List>
      </Box>
    );
    
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component={Link}
              to="/"
              sx={{ display: { xs: 'none', sm: 'flex' }, height: "100%", alignItems: "center" }}
            >
            <img sx={{my: 2}} src={logo} alt='logo' className='h-12 object-contain'/>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button key={item} component={Link} to={`/${item.toLowerCase()}`} sx={{ color: 'black' }}>
                  {item}
                </Button>
              ))}

              <IconButton onClick={onLogout} sx={{color: 'error.main', ml: 2}} aria-label="logout">
                <LogoutOutlined />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    );
  }

Navbar.propTypes = {
  window: PropTypes.func,
};
