import { Container, Typography, Box, Avatar, Chip, Grid, Link, Divider } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope, FaGamepad, FaCode, FaGlobeAmericas } from 'react-icons/fa';

const techStack = {
  Frontend: ['React.js', 'Material UI', 'Tailwind CSS', 'Bootstrap'],
  Backend: ['Node.js', 'PHP', 'Firebase'],
  Languages: ['Java', 'JavaScript'],
  Mobile: ['Android'],
};

const hobbies = [
  { icon: <FaGamepad size={32} color="#8bc53f" />, label: 'Gaming' },
  { icon: <FaCode size={32} color="#66c0f4" />, label: 'Coding & Open Source' },
  { icon: <FaGlobeAmericas size={32} color="#f28c28" />, label: 'Travel & Exploration' },
];

export default function About() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: 'linear-gradient(135deg, #1b2838 0%, #171a21 100%)',
        color: '#c7d5e0',
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Typography
          variant="h3"
          sx={{
            paddingTop: '100px',
            fontWeight: 'bold',
            mb: 5,
            background: 'linear-gradient(to right, #66c0f4, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            letterSpacing: 1.2,
          }}
        >
          About Me
        </Typography>

        {/* Profile Section */}
        <Box
          sx={{
            display: 'flex',
            gap: 5,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            backgroundColor: 'rgba(27, 40, 56, 0.85)',
            borderRadius: 3,
            p: 4,
            boxShadow: '0 0 25px rgba(102, 192, 244, 0.5)',
            '&:hover': { boxShadow: '0 0 40px rgba(102, 192, 244, 0.8)' },
          }}
        >
          <Avatar
            src="/files/charlou.png"
            alt="Charlou Ybarley"
            sx={{
              width: 250,
              height: 250,
              borderRadius: 3,
              boxShadow: '0 0 20px #66c0f4',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />

          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              I’m Charlou Ybarley, a passionate fourth-year IT student specializing in Android and web app development.
              My work is influenced by clean design and user-friendly experiences, much like the gaming platforms I admire.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              With skills in Java, React.js, Firebase, and PHP, I enjoy creating applications that are modern, scalable, and impactful.
              I adapt quickly to new technologies and continuously challenge myself through personal and academic projects.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              Outside of coding, I find inspiration in gaming, open source contributions, and traveling to discover new perspectives.
            </Typography>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link href="https://www.linkedin.com/in/ybarley-charlou-t-05b481286/" target="_blank" rel="noopener">
                <FaLinkedin size={32} color="#66c0f4" />
              </Link>
              <Link href="mailto:ybarleycharlou04@gmail.com">
                <FaEnvelope size={32} color="#66c0f4" />
              </Link>
              <Link href="https://github.com/Codesloth15" target="_blank" rel="noopener">
                <FaGithub size={32} color="#66c0f4" />
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Tech Stack */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              background: 'linear-gradient(to right, #66c0f4, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Tech Stack
          </Typography>

          <Grid container spacing={3}>
            {Object.entries(techStack).map(([category, items]) => (
              <Grid item xs={12} sm={6} key={category}>
                <Typography variant="h6" sx={{ color: '#8bc53f', mb: 1 }}>
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {items.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        background: 'rgba(102,192,244,0.1)',
                        borderColor: '#66c0f4',
                        color: '#66c0f4',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        '&:hover': {
                          background: '#66c0f4',
                          color: '#171a21',
                        },
                      }}
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Hobbies */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              background: 'linear-gradient(to right, #66c0f4, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Hobbies & Interests
          </Typography>
          <Grid container spacing={3}>
            {hobbies.map(({ icon, label }) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={label}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {icon}
                <Typography sx={{ mt: 1, fontWeight: 'bold' }}>{label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
