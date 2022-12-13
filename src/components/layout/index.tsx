import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./index.css";
import { useDispatch } from 'react-redux';
import { updateToCelsius, updateToFahrenheit } from '../../store/isCelsiusSlice';

const pages = [{ path: '', textView: 'Home' }, { path: 'favorites', textView: 'Favorites' }];

const Layout = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [temperatureType, setTemperatureType] = useState<string>('celsius');
  const dispatch = useDispatch();

  const handleTemperatureTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newTemperatureType: string,
  ) => {
    setTemperatureType(newTemperatureType);
    if (newTemperatureType === 'celsius') {
      dispatch(updateToCelsius());
    } else if (newTemperatureType === 'fahrenheit') {
      dispatch(updateToFahrenheit());
    }

  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <WbSunnyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.25rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Weather today
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link to={page.path}><Typography textAlign="center">{page.textView}</Typography></Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <WbSunnyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.25rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Weather today
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Link to={page.path} key={index}><Button
                  key={page.textView}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >{page.textView}</Button></Link>
              ))}
            </Box>
            <ToggleButtonGroup
              color="primary"
              value={temperatureType}
              exclusive
              onChange={handleTemperatureTypeChange}
              aria-label="Platform"
              style={{
                height: '40px',
                border: '1px solid white'
              }}
            >

              <ToggleButton id='first-type-style' value="celsius"><p className='temp-type-style'>C°</p></ToggleButton>
              <ToggleButton value="fahrenheit"><p className='temp-type-style'>F°</p></ToggleButton>
            </ToggleButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  )
};

export default Layout;