import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';

const moodColors = ['#7F56D9', '#F6BE3C', '#F76B8A', '#3BAFDA', '#4CAF50'];

const StatisticsView = ({ moodStats }) => {
  const data = Object.entries(moodStats).map(([mood, count], index) => ({
    name: mood,
    value: count,
    color: moodColors[index % moodColors.length],
  }));

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" align="center" fontWeight="bold" mb={4}>
        Mood Statistics
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            dataKey="value"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            iconType="circle"
            formatter={(value) => (
              <span style={{ color: '#ccc', fontSize: 14 }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>

      <Typography variant="caption" display="block" align="center" mt={4} sx={{ color: 'gray' }}>
        Your data is stored locally on your device.
      </Typography>
    </Box>
  );
};

export default StatisticsView;
