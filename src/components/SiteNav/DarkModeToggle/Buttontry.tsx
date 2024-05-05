import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { TryContext } from '../../../contexts/TryContext';
import { IconButton } from '@mui/material';



const Buttontry = () => {
  const theme = useTheme();
  const colorMode = useContext(TryContext);
  return (
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default Buttontry;