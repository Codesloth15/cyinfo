import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function Services() {
  const services = [
    { name: 'Web Development', desc: 'Full-stack development for web apps.' },
    { name: 'UI/UX Design', desc: 'Beautiful, functional interfaces.' },
    { name: 'API Integration', desc: 'Connecting services seamlessly.' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" color="primary" gutterBottom>Services</Typography>
      <Grid container spacing={2}>
        {services.map((service, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card sx={{ backgroundColor: 'background.paper', p: 2 }}>
              <CardContent>
                <Typography variant="h6">{service.name}</Typography>
                <Typography variant="body2" color="text.secondary">{service.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
