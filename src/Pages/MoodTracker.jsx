// MoodTracker.jsx
import React, { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import CalendarView from '../components/MoodTracker/CalendarView';
import StatisticsView from '../components/MoodTracker/StatisticsView';

const MoodTracker = () => {
  const [view, setView] = useState('calendar');

  const handleChange = (e, newView) => {
    if (newView) setView(newView);
  };

  return (
    <Box sx={{ px: 3, pt: 4, pb: 8 }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={2}>
        Mood Tracker
      </Typography>
      <Typography variant="subtitle1" align="center" mb={4}>
        Track how you feel every day
      </Typography>

      <Box display="flex" justifyContent="center" mb={3}>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleChange}
          sx={{
            backgroundColor: '#1a1a2e',
            borderRadius: 3,
            p: 0.5,
          }}
        >
          <ToggleButton value="calendar" sx={{ color: 'white', textTransform: 'none' }}>Calendar</ToggleButton>
          <ToggleButton value="statistics" sx={{ color: 'white', textTransform: 'none' }}>Statistics</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {view === 'calendar' ? <CalendarView /> : <StatisticsView moodStats={{ Good: 8, Neutral: 2, Sad: 1 }} />}
    </Box>
  );
};

export default MoodTracker;
