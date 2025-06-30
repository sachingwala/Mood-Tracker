import { Box, Typography, Grid, Paper, Button } from '@mui/material';

// const stats = [
//   { number: '100%', label: 'Private Mood Tracker' },
//   { number: '5+', label: 'Mood Options' },
//   { number: '0', label: 'Login Required' },
//   { number: '∞', label: 'Tracking Days' },
// ];

export default function AboutUs() {
   return (
    <Box
      sx={{
        backgroundColor: '#030616',
        py: 10,
        px: { xs: 3, md: 10 },
        color: '#fff',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {/* LEFT TEXT */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography variant="h4" fontWeight="bold" align='center' gutterBottom>
            About MoodTrack
          </Typography>
          <Typography sx={{ color: '#b0b8d0', mb: 2 }}>
            MoodTrack was created with a simple mission: to help people become more aware of their emotional patterns and improve their mental well-being through self-reflection.
          </Typography>
          <Typography sx={{ color: '#b0b8d0', mb: 2 }}>
            Our app is designed to be simple, intuitive, and private. We believe that everyone should have access to tools that can help them understand themselves better and improve their mental health.
          </Typography>
          <Typography sx={{ color: '#b0b8d0', mb: 4 }}>
            With MoodTrack, you can easily record your daily mood, identify patterns and triggers, and gain insights that can help you make positive changes in your life.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#4f46e5',
              borderRadius: 3,
              px: 3,
              py: 1,
              textTransform: 'none',
              alignSelf: 'center',
              '&:hover': {
                backgroundColor: '#4f46e5',
                color: '#fff',
              },
            }}
          >
            Learn More About Us
          </Button>
        </Grid>

        {/* RIGHT BOX */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }} alignContent={'center'}>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: '#1c2231',
              borderRadius: 3,
              p: 6,
              color: '#fff',
            }}
          >
            <Grid container spacing={4}>
              {[
                ['100%', 'Privacy-focused'],
                ['5+', 'Mood emotions'],
                ['0', 'Login required'],
                ['∞', 'Days of tracking'],
              ].map(([value, label], i) => (
                <Grid item xs={6} key={i}>
                  <Typography variant="h5" sx={{ color: '#7b5dff', fontWeight: 'bold' }}>
                    {value}
                  </Typography>
                  <Typography variant="body2">{label}</Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
