import { Box, Button, Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useContext } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { TryContext } from "../../../contexts/TryContext";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Padding } from "@mui/icons-material";
import PetsIcon from '@mui/icons-material/Pets';

type Props = {
  pages: string[];
}


const NavLinks = (props: Props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = useContext(TryContext);


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (<>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
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
        <MenuItem key={'home'} onClick={() => {
          navigate('/');
        }}>
          <PetsIcon sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GALILEGO
          </Typography>
        </MenuItem>
        <Divider variant="middle" />
        {props.pages.map((page) => (
          <MenuItem key={page} onClick={() => {
            handleCloseNavMenu();
            navigate(`/${page.replace(" ", "")}`)
          }} sx={{ textAlign: 'center' }} >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}

        {/* Theme Change button in responsive menu */}
        <MenuItem key={'themeChange'}
          sx={theme.palette.mode === 'light' ? { color: 'black' } : { color: 'white' }}
          onClick={() => {
            handleCloseNavMenu();
            colorMode.toggleColorMode();
          }}>

          {theme.palette.mode === 'light' ? 'Dark Mode' : 'Light Mode'}{theme.palette.mode === 'dark' ? <Brightness7Icon sx={{ pl: 1 }} /> : <Brightness4Icon sx={{ pl: 1 }} />}

        </MenuItem>
      </Menu>
    </Box>


    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>

      {props.pages.map((page) => (
        <Button
          key={page}
          onClick={() => {
            navigate(`/${page.replace(" ", "")}`);
            handleCloseNavMenu
          }}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}

    </Box>
  </>)
}

export default NavLinks;