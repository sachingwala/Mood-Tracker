import { Box, Grid, Typography, Link, Divider, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#030616',
        color: '#fff',
        px: { xs: 3, md: 10 },
        pt: 10,
        pb: 5,
      }}
    >
      <Grid container spacing={4}>
        {/* Column 1 - Brand */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            MoodTrack
          </Typography>
          <Typography sx={{ color: '#b0b8d0' }}>
            Track and manage your daily moods to improve your well-being and mental health.
          </Typography>
        </Grid>

        {/* Column 2 - Quick Links */}
        <Grid item xs={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="/mood-tracker" color="inherit" underline="hover">
              Mood Tracker
            </Link>
            <Link href="/blog" color="inherit" underline="hover">
              Blog
            </Link>
          </Box>
        </Grid>

        {/* Column 3 - About */}
        <Grid item xs={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            About
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/about" color="inherit" underline="hover">
              About Us
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
            <Link href="/privacy-policy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Box>
        </Grid>

        {/* Column 4 - Contact */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Contact
          </Typography>
          <Typography sx={{ color: '#b0b8d0' }}>
            Email: <Link href="mailto:contact@moodtrack.com" underline="hover" color="inherit">contact@moodtrack.com</Link>
          </Typography>
          <Typography sx={{ color: '#b0b8d0' }}>
            Phone: +1 (555) 123-4567
          </Typography>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, backgroundColor: '#1e293b' }} />

      {/* Bottom Section */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
          © 2025 MoodTrack. All rights reserved.
        </Typography>
        <Box>
          <IconButton href="#" sx={{ color: '#94a3b8' }}>
            <Twitter />
          </IconButton>
          <IconButton href="#" sx={{ color: '#94a3b8' }}>
            <Facebook />
          </IconButton>
          <IconButton href="#" sx={{ color: '#94a3b8' }}>
            <Instagram />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
