import React from 'react'
// import Navbar from '../components/common/Navbar';
import HeroSection from '../components/common/HeroSection';
import HowItWorks from '../components/common/HowItWorks';
import AboutUs from '../components/common/AboutUs';
import ContactSection from '../components/common/ContactSection';
import Footer from '../components/common/Footer';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';




 const HomePage = () => {
  const theme = useTheme();
  return (
    <>
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <main style={{ borderTop: `1px solid ${theme.palette.divider}` }}>
        <HeroSection />
        <HowItWorks />
        <AboutUs />
        <ContactSection />
      </main>
      <Footer />
    </Box>
    </>
  )
}
export default HomePage;
