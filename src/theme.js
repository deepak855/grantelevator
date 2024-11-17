// src/theme.js
import { createTheme } from '@mui/material/styles';

// Create a custom theme with a global font family
const theme = createTheme({
  typography: {
    fontFamily: 'HMTCBJ+MyriadPro-Regular', // Define the global font family
    wordSpacing: '0.89em',
  },
});

export default theme;
