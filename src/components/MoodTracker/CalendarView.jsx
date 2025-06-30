import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarView = ({ currentMonth, days, handlePrevMonth, handleNextMonth, selectedDate, onDateClick }) => {
  return (
    <Box sx={{ mt: 4 }}>
      {/* Month header */}
      <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
        <IconButton onClick={handlePrevMonth}><ArrowBackIos sx={{ fontSize: 18 }} /></IconButton>
        <Typography variant="h6" mx={2} fontWeight="bold">
          {currentMonth}
        </Typography>
        <IconButton onClick={handleNextMonth}><ArrowForwardIos sx={{ fontSize: 18 }} /></IconButton>
      </Box>

      {/* Days of the week */}
      <Grid container spacing={1} justifyContent="center">
        {daysOfWeek.map((day) => (
          <Grid item xs={1.7} sm={1.2} md={1} key={day}>
            <Typography
              align="center"
              fontWeight="medium"
              sx={{ color: 'text.secondary' }}
            >
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Days */}
      <Grid container spacing={1} justifyContent="center" mt={1}>
        {days.map(({ date, isCurrentMonth }) => {
          const isSelected = selectedDate === date;
          return (
            <Grid item xs={1.7} sm={1.2} md={1} key={date}>
              <Box
                onClick={() => onDateClick(date)}
                sx={{
                  width: '100%',
                  height: 50,
                  bgcolor: isSelected ? '#7F56D9' : isCurrentMonth ? 'rgba(255,255,255,0.04)' : 'transparent',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#fff' : '#cfcfcf',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: isSelected ? '2px solid #fff' : '1px solid transparent',
                  '&:hover': {
                    bgcolor: isSelected ? '#6c47c3' : 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                {date}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CalendarView;
