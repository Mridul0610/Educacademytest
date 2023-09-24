import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/mridul-sharma-697961232/">
        My Profile
        
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      <p>EMail: mridul0120@gmail.com</p>
      
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '20vh',
          justifyContent:"left",
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 2.5,
            px: 2,
           
            backgroundColor:"#CAEDFF" ,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Made with ❤️ by <a href='https://github.com/Mridul0610'>Mridul Sharma.</a>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}