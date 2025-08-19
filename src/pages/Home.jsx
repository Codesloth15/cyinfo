import { Box, Typography, Button, Grid, Divider, List, ListItem, ListItemText, Container, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const techStack = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'PHP', 'npm',
    'Java', 'Android', 'Node.js', 'Firebase', 'Postman', 'Canva', 'Notion', 'Git/GitHub'
  ];

  const highlights = [
    'Built and deployed a student attendance system used daily by 300+ students and staff.',
    'Developed Android apps that improved task efficiency by 40%.',
    'Designed and launched responsive web projects using React, PHP, and Firebase.'
  ];

  const quickProfile = [
    { label: 'Location', value: 'Philippines' },
    { label: 'Role', value: 'IT Student / Junior Developer' },
    { label: 'Specialties', value: 'Android, Web Apps, Firebase Integration' },
    { label: 'Open to', value: 'Internship / Junior Dev Roles' }
  ];

  return (
    <Box sx={{ backgroundColor: '#171a21', minHeight: '100vh', py: 5, paddingTop: '100px' }}>
      <Container>
        {/* Greeting */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            background: 'linear-gradient(to right, #66c0f4, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Hello, I’m Charlou Ybarley
        </Typography>

        <Typography variant="h5" sx={{ color: '#66c0f4', mb: 2 }}>
          Building smart, user-friendly web and mobile solutions
        </Typography>

        <Typography variant="body1" sx={{ color: '#c7d5e0', mb: 4, maxWidth: '800px' }}>
          I’m a 4th-year IT student passionate about crafting functional and visually appealing apps. 
          Skilled in Java, PHP, and React, with experience in Firebase integration and responsive design. 
          I focus on creating projects that solve real problems and deliver measurable results.
        </Typography>

        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={8}>
            {/* Highlights */}
            <Box sx={{ backgroundColor: '#1b2838', borderRadius: 1, p: 3, mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#8bc53f', mb: 2 }}>
                Highlights
              </Typography>
              <List dense sx={{ color: '#c7d5e0' }}>
                {highlights.map((point, i) => (
                  <ListItem key={i} sx={{ py: 0 }}>
                    <ListItemText primaryTypographyProps={{ fontSize: '0.95rem' }} primary={point} />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Tech Stack */}
            <Box sx={{ backgroundColor: '#1b2838', borderRadius: 1, p: 3 }}>
              <Typography variant="h6" sx={{ color: '#66c0f4', mb: 2 }}>
                Tech Stack
              </Typography>
              <Grid container spacing={1}>
                {techStack.map((tech, i) => (
                  <Grid key={i} item>
                    <Chip label={tech} sx={{ backgroundColor: '#2a475e', color: '#c7d5e0', fontSize: '0.8rem' }} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right Section - Quick Profile */}
          <Grid item xs={12} md={4}>
            <Box sx={{ backgroundColor: '#1b2838', borderRadius: 1, p: 3 }}>
              <Typography variant="h6" sx={{ color: '#66c0f4', mb: 2 }}>
                Quick Profile
              </Typography>
              <Divider sx={{ borderColor: '#3a4a5a', mb: 2 }} />

              <List dense>
                {quickProfile.map((item, i) => (
                  <ListItem key={i} sx={{ py: 0 }}>
                    <ListItemText
                      primaryTypographyProps={{ color: '#c7d5e0', fontSize: '0.9rem' }}
                      primary={`${item.label}: ${item.value}`}
                    />
                  </ListItem>
                ))}
              </List>

              {/* Resume Button */}
              <Divider sx={{ borderColor: '#3a4a5a', my: 2 }} />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#8bc53f',
                  color: '#171a21',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#7aa836' }
                }}
                component="a"
                href="/files/charlouybarley.png"
                download="charlouybarley.png"
              >
                Download Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
