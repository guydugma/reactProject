import * as React from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import Buttontry from './DarkModeToggle/Buttontry';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { CardsContext } from '../../contexts/CardsContext';
import { NavLink, redirect, useLocation, useNavigate } from 'react-router-dom';
import auth, { userDetails } from '../../services/auth';
import { router } from '../../routes/router';
import { Link } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import ProfileOptions from './ProfileOptions/ProfileOptions';
import SearchBar from './SearchBar/SearchBar';
import NavLinks from './NavLinks/NavLinks';





const noUserPages = ['about', 'register', 'login'];
const userPages = ['about', 'favorites'];
const buisnessUserPages = ['about', 'favorites', 'my cards'];
const adminUserPages = ['about', 'favorites', 'my cards', 'sandbox'];


function ResponsiveAppBar() {
  const navigate = useNavigate();
  const { isLoggedIn, userPrevileges, login, logout } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {!isLoggedIn && (<NavLinks pages={noUserPages} />)}
          {(isLoggedIn && userPrevileges.isAdmin && (<NavLinks pages={adminUserPages} />))}
          {(isLoggedIn && !userPrevileges.isAdmin && userPrevileges.isBusiness) && (<NavLinks pages={buisnessUserPages} />)}
          {isLoggedIn && !userPrevileges.isAdmin && !userPrevileges.isBusiness && (<NavLinks pages={userPages} />)}

          <SearchBar />
          {isLoggedIn && <ProfileOptions />}
          <Buttontry />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
