// src/components/Navbar.jsx
import { AppBar, Toolbar, Typography, IconButton, Box, Stack } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


export default function Navbar({ darkMode, setDarkMode }) {
    
  //  const navigate = useNavigate();

  const handleToggle = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ background: '#060a1f' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold">
          <Box component="span" sx={{ color: 'rgb(241, 241, 245)' }}>Mood</Box>Track
        </Typography>

        <Stack direction="row" spacing={4} display={{ xs: 'none', md: 'flex' }} alignItems="center"  >
          {['Home', 'MoodTracker', 'Blog', 'About', 'Contact'].map((item) => (
           <Typography
    key={item}
    variant="body1"
    component={Link} // ✅ make it a React Router link
    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
    sx={{
      cursor: 'pointer',
      color: '#fff',
      textDecoration: 'none',
      '&:hover': { color: 'rgb(116, 91, 240)' },
    }}
  >
    {item}
  </Typography>
          ))}
        </Stack>

        
        <Box
          display="flex"
          alignItems="center"
          sx={{ cursor: 'pointer', color: '#fff' }}
         onClick={handleToggle}
        >
          {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
