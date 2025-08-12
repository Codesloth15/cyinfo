import { Box, Typography, Button, Grid, Divider, List, ListItem, ListItemText, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const toolCategories = [
    {
      title: 'Web & App Development',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'Bootstrap',
        'Material UI',
        'PHP',
        'npm'
      ]
    },
    {
      title: 'Mobile Development',
      items: [
        'Java',
        'Android'
      ]
    },
    {
      title: 'Backend & Cloud',
      items: [
        'Node.js',
        'Firebase',
        'Postman'
      ]
    },
    {
      title: 'Tools & Productivity',
      items: [
        'Canva',
        'Notion'
      ]
    }
  ];

  const skills = [
    'Android Development (Java)',
    'Web Development (React.js, PHP)',
    'Firebase Integration',
    'Git/GitHub Version Control',
    'Problem Solving',
    'IT Support',
    'Communication'
  ];

  return (
    <Box sx={{ backgroundColor: '#171a21', minHeight: '100vh', py: 5,      paddingTop: '100px' , }}>
      <Container>
        {/* Greeting */}
        <Typography
          variant="h3"
          sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            mb: 1,
            background: 'linear-gradient(to right, #66c0f4, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Hello I'm,
        </Typography>
              <Typography
          variant="h3"
          sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            mb: 1,
            background: 'linear-gradient(to right, #66c0f4, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
         Charlou Ybarley
        </Typography>

        <Typography variant="h6" sx={{ color: '#66c0f4', mb: 4 }}>
          Welcome to My Portfolio
        </Typography>

        <Grid container spacing={4}>
          {/* Left section */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                background: 'linear-gradient(to bottom, #1b2838, #171a21)',
                borderRadius: 1,
                p: 3,
                mb: 4
              }}
            >
        <Typography
  variant="body1"
  sx={{ color: '#c7d5e0', lineHeight: 1.6 }}
>
  Fourth Year IT student with experience in Android mobile and web application development. Skilled in Java, PHP, React.js,
  and Firebase, with projects including mobile apps, websites, and database-powered systems. Flexible in learning new tools
  and technologies to improve and expand technical skills.
</Typography>
            </Box>

            {/* Tools I Use */}
            <Box sx={{ backgroundColor: '#1b2838', borderRadius: 1, p: 3, mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#66c0f4', mb: 2 }}>
                Tools I Use
              </Typography>
              {toolCategories.map((category, i) => (
                <Box key={i} sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ color: '#8bc53f', fontWeight: 'bold', mb: 1 }}>
                    {category.title}
                  </Typography>
                  <Grid container spacing={1}>
                    {category.items.map((tool, j) => (
                      <Grid key={j} item xs={6} sm={4} md={3}>
                        <Typography variant="body2" sx={{ color: '#c7d5e0' }}>
                          {tool}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Box>

            {/* Skills */}
            <Box sx={{ backgroundColor: '#1b2838', borderRadius: 1, p: 3 }}>
              <Typography variant="h6" sx={{ color: '#66c0f4', mb: 2 }}>
                Skills
              </Typography>
              <Grid container spacing={2}>
                {skills.map((skill, i) => (
                  <Grid key={i} item xs={12} sm={6} md={4}>
                    <Typography variant="body2" sx={{ color: '#c7d5e0' }}>
                      {skill}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right section - Personal Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ backgroundColor: '#1b2838', borderRadius: 1, p: 3 }}>
              <Typography variant="h6" sx={{ color: '#66c0f4', mb: 2 }}>
                Personal Information
              </Typography>

              <Divider sx={{ borderColor: '#3a4a5a', mb: 2 }} />

              <List dense>
                {[
                  'Age: 24',
                  'Civil Status: Single',
                  'Date of Birth: March 15, 2001',
                  'Gender: Male',
                  'BSIT',
                  'Year: 4th Year'

             
                ].map((item, i) => (
                  <ListItem key={i} sx={{ py: 0 }}>
                    <ListItemText
                      primaryTypographyProps={{ color: '#c7d5e0', fontSize: '0.9rem' }}
                      primary={`› ${item}`}
                    />
                  </ListItem>
                ))}
              </List>

              {/* About Button */}
              <Divider sx={{ borderColor: '#3a4a5a', my: 2 }} />
<Button
  variant="contained"
  sx={{
    backgroundColor: '#8bc53f',
    color: '#171a21',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': { backgroundColor: '#7aa836' },
    mb: 2
  }}
  component="a"
  href="/charlouybarley.png" // File path in public folder
  download="Charlou_T_Ybarley_Resume.png"
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
