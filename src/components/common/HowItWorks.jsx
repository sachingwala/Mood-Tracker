// components/HowItWorks.jsx
import { Box, Typography, Grid, Paper } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LockIcon from '@mui/icons-material/Lock';

const features = [
  {
    icon: <EmojiEmotionsIcon sx={{ fontSize: 30, color: '#7b5dff' }} />,
    title: 'Daily Mood Tracking',
    desc: 'Record your mood with simple emoji selections. Just one click to track how you feel every day.',
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 30, color: '#7b5dff' }} />,
    title: 'Mood Calendar View',
    desc: 'Visualize your emotional patterns with a color-coded calendar that helps you identify trends over time.',
  },
  {
    icon: <ShowChartIcon sx={{ fontSize: 30, color: '#7b5dff' }} />,
    title: 'Mood Statistics',
    desc: 'Get insights into your emotional well-being with simple charts and statistics about your mood patterns.',
  },
  {
    icon: <LockIcon sx={{ fontSize: 30, color: '#7b5dff' }} />,
    title: 'Private & Local',
    desc: 'Your data stays on your device. No account required, and your mood history is stored in your browser\'s local storage.',
  },
];

export default function HowItWorks() {
 return (
    <Box sx={{ backgroundColor: ' #07132e', py: 8, px: { xs: 3, md: 10 }, color: '#fff' }}>
      <Typography variant="h4" fontWeight="bold" align="center" sx={{mb: 4 }}  gutterBottom>
        How It Works
      </Typography>
      <Typography  align="center"  sx={{ mb: 6, color: ' #b0b8d0' }}>
        MoodTrack helps you understand your emotional well-being through simple tools and visualizations
      </Typography>
      
      {/* Force row layout with fixed width per item */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {features.map((feature, index) => (
          <Paper
            key={index}
            elevation={4}
            sx={{
              backgroundColor: 'rgb(8, 13, 24)',
              p: 3,
              borderRadius: 3,
              width: { xs: '100%', sm: '45%', md: '22%' },
              minHeight: 250,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: '#181e30',
                width: 40,
                height: 40,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {feature.icon}
            </Box>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#fff' }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" sx={{ color: ' #b0b8d0' }}>
              {feature.desc}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
