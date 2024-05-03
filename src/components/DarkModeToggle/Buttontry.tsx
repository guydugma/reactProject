import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createContext, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { TryContext } from '../../contexts/TryContext';
import Button from '@mui/material/Button';


const Buttontry = () => {
  const theme = useTheme();
  const colorMode = useContext(TryContext);
  return (
    <Button onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
    </Button>
  )
}

export default Buttontry;