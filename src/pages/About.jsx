import { Container, Typography, Box, Avatar, Chip, Grid, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const techStack = [
  'Java', 'React.js', 'Firebase', 'PHP', 'Android', 'Node.js', 'Material UI', 'Tailwind CSS','Bootstrap'
];

const hobbies = [
  { icon: <SportsEsportsIcon sx={{ color: '#8bc53f' }} />, label: 'Gaming' },
  { icon: <CodeIcon sx={{ color: '#66c0f4' }} />, label: 'Coding & Open Source' },
  { icon: <TravelExploreIcon sx={{ color: '#f28c28' }} />, label: 'Travel & Exploration' },
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
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 0 40px rgba(102, 192, 244, 0.8)',
            },
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
              I’m Charlou Ybarley, a passionate fourth-year IT student specializing in Android and web app development. I
              love crafting immersive, intuitive user experiences inspired by gaming platforms like Steam.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              Skilled in Java, React.js, Firebase, PHP, and more, I’m always exploring new tools and technologies to create
              modern, scalable applications.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              Outside of coding, I enjoy gaming, open source contributions, and traveling to find fresh inspiration.
            </Typography>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link
                href="https://www.linkedin.com/in/ybarley-charlou-t-05b481286/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#66c0f4', '&:hover': { color: '#8bc53f' } }}
              >
                <LinkedInIcon fontSize="large" />
              </Link>
              <Link
                href="mailto:ybarleycharlou04@gmail.com"
                sx={{ color: '#66c0f4', '&:hover': { color: '#8bc53f' } }}
              >
                <EmailIcon fontSize="large" />
              </Link>
              <Link
                href="https://github.com/Codesloth15"
                target="_blank"
                rel="noopener"
                sx={{ color: '#66c0f4', '&:hover': { color: '#8bc53f' } }}
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Tech Stack Section */}
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

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
                sx={{
                  borderColor: '#8bc53f',
                  color: '#8bc53f',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  px: 2,
                  py: 0.5,
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Hobbies Section */}
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
                  color: '#c7d5e0',
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
