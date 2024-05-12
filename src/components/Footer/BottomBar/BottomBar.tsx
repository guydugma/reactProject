
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './BottomBar.scss';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const [value, setValue] = useState(-1);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const paths = ['/about', '/favorites', '/mycards'];


  return (
    <BottomNavigation
      showLabels
      value={paths.indexOf(useLocation().pathname.toLowerCase())}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}>
      <BottomNavigationAction label="About" icon={<InfoIcon />} onClick={() => { navigate('/about') }} />

      {authContext.isLoggedIn && <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />}
        onClick={() => { navigate('/Favorites') }} />}

      {authContext.isLoggedIn && (authContext.userPrevileges.isBusiness || authContext.userPrevileges.isAdmin) && <BottomNavigationAction label="My Cards" icon={<AccountBoxIcon />}
        onClick={() => { navigate('/Mycards') }} />}
    </BottomNavigation>
  );
}

export default BottomBar;
