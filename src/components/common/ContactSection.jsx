import { Box, Typography, Grid, TextField, Button, Stack } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

export default function ContactSection() {
  return (
    <Box
      sx={{
        backgroundColor: ' #07132e',
        py: 10,
        px: { xs: 3, md: 10 },
        color: '#fff',
      }}
    >
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography align="center" sx={{ mb: 6, color: '#b0b8d0' }}>
        Have feedback or need help? We’d love to hear from you.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <form>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { backgroundColor: '#0f172a', color: '#fff' },
              }}
              InputLabelProps={{ style: { color: '#b0b8d0' } }}
            />
            <TextField
              fullWidth
              label="Your Email"
              type="email"
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { backgroundColor: '#0f172a', color: '#fff' },
              }}
              InputLabelProps={{ style: { color: '#b0b8d0' } }}
            />
            <TextField
              fullWidth
              label="Your Message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              InputProps={{
                style: { backgroundColor: '#0f172a', color: '#fff' },
              }}
              InputLabelProps={{ style: { color: '#b0b8d0' } }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#4f46e5',
                borderRadius: 3,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#372eeb',
                },
              }}
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
