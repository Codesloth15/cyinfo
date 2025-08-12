import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, Container, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useState } from 'react';

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: 'ERA - Emergency Response Application (THESIS)',
      image: 'https://via.placeholder.com/600x300?text=ERA+Emergency+Response+App',
      description: 'A thesis project focused on developing an emergency response application to aid rapid communication and assistance during crises.'
    },
    {
      title: 'PyJava - Mobile Learning Platform (Freelance)',
      image: 'https://via.placeholder.com/600x300?text=PyJava+Mobile+Learning',
      description: 'A mobile learning platform designed for interactive and engaging educational experiences, developed during a freelance project.'
    },
    {
      title: 'School Voting System - E-Voting System',
      image: 'https://via.placeholder.com/600x300?text=School+Voting+System',
      description: 'An electronic voting system for schools to securely conduct elections and ensure transparent voting processes.'
    },
  ];

  const handleOpen = (proj) => {
    setSelected(proj);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ backgroundColor: '#171a21', minHeight: '100vh', py: 5, paddingTop: '100px' }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            mb: 3,
            background: 'linear-gradient(to right, #66c0f4, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'left'
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4} justifyContent="flex-start">
          {projects.map((proj) => (
            <Grid item xs={12} key={proj.title} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  background: 'linear-gradient(to bottom, #1b2838, #171a21)',
                  borderRadius: 2,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
                onClick={() => handleOpen(proj)}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={proj.image}
                  alt={proj.title}
                  sx={{ borderRadius: '8px 8px 0 0' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" sx={{ color: '#66c0f4', fontWeight: 'bold', mb: 1 }}>
                    {proj.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#c7d5e0', mb: 2, lineHeight: 1.5, flexGrow: 1 }}>
                    {proj.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#8bc53f',
                      color: '#171a21',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      alignSelf: 'flex-start',
                      '&:hover': { backgroundColor: '#7aa836' }
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpen(proj);
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Project Details Dialog */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          {selected && (
            <>
              <DialogTitle sx={{ backgroundColor: '#1b2838', color: '#66c0f4' }}>
                {selected.title}
              </DialogTitle>
              <DialogContent sx={{ backgroundColor: '#171a21', color: '#c7d5e0' }}>
                <Box
                  component="img"
                  src={selected.image}
                  alt={selected.title}
                  sx={{ width: '100%', borderRadius: 2, mb: 2 }}
                />
                <Typography>{selected.description}</Typography>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}
