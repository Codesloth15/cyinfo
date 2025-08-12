import { Container, Typography, Grid, Chip, Box } from '@mui/material';

export default function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'MUI', 'Tailwind CSS', 'Git'];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" color="primary" gutterBottom>Skills</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, idx) => (
          <Chip key={idx} label={skill} sx={{ backgroundColor: 'background.paper', color: 'white', fontSize: '1rem' }} />
        ))}
      </Box>
    </Container>
  );
}
