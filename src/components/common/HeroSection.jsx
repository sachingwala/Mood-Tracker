// src/components/HeroSection.jsx
import { Box, Button, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <Box sx={{ bgcolor: '#030616', color: '#fff', px: 8, py: 20 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
        {/* Left Content */}
        <Box maxWidth="800px">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Track Your <Box component="span" sx={{ color: '#7B61FF' }}>Mood</Box> and Improve Well-being
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mt: 2 }}>
            Our simple mood tracker helps you understand your emotional patterns, identify triggers,
            and improve your mental well-being over time.
          </Typography>
          <Stack direction="row" spacing={2} mt={4}>
            <Button variant="contained" sx={{ bgcolor: '#7B61FF' }}>
              Start Tracking Mood →
            </Button>
            <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
              Learn More
            </Button>
          </Stack>
        </Box>

        {/* Mood Graphic */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Box
            sx={{
              width: 300,
              height: 300,
              bgcolor: '#e6e0ff',
              borderRadius: '50%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h1">😊</Typography>
            <Typography variant="h5" sx={{ position: 'absolute', top: 16, right: 24 }}>😄</Typography>
            <Typography variant="h5" sx={{ position: 'absolute', top: 20, left: 24 }}>😭</Typography>
            <Typography variant="h5" sx={{ position: 'absolute', bottom: 24, left: 20 }}>😐</Typography>
            <Typography variant="h5" sx={{ position: 'absolute', bottom: 24, right: 24 }}>🙂</Typography>
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
}
