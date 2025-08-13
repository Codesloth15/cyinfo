import { Box, Typography, Container, Grid, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import SmsIcon from '@mui/icons-material/Sms'; // for Messenger

export default function Contact() {
  return (
    <Box sx={{ backgroundColor: '#171a21', minHeight: '100vh', py: 6 , paddingTop: '100px'}}>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          sx={{
            color: '#66c0f4',
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
            background: 'linear-gradient(to right, #66c0f4, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Contact Me
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: '#c7d5e0', mb: 4, textAlign: 'center', fontSize: '1.1rem' }}
        >
          Feel free to reach out through any of the following platforms:
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* LinkedIn */}
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/ybarley-charlou-t-05b481286/"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
            >
              <IconButton
                sx={{
                  backgroundColor: '#0077b5',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#005582' },
                  width: 70,
                  height: 70,
                }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography
                sx={{ mt: 1, textAlign: 'center', color: '#c7d5e0', fontWeight: 'bold' }}
              >
                LinkedIn
              </Typography>
            </Link>
          </Grid>

          {/* Email */}
          <Grid item>
            <Link
              href="mailto:ybarleycharlou04@gmail.com"
              color="inherit"
              underline="none"
            >
              <IconButton
                sx={{
                  backgroundColor: '#c23321',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#8a1a11' },
                  width: 70,
                  height: 70,
                }}
                aria-label="Email"
              >
                <EmailIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography
                sx={{ mt: 1, textAlign: 'center', color: '#c7d5e0', fontWeight: 'bold' }}
              >
                Email
              </Typography>
            </Link>
          </Grid>

          {/* GitHub */}
          <Grid item>
            <Link
              href="https://github.com/Codesloth15"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
            >
              <IconButton
                sx={{
                  backgroundColor: '#333',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#000' },
                  width: 70,
                  height: 70,
                }}
                aria-label="GitHub"
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography
                sx={{ mt: 1, textAlign: 'center', color: '#c7d5e0', fontWeight: 'bold' }}
              >
                GitHub
              </Typography>
            </Link>
          </Grid>

          {/* Messenger */}
          <Grid item>
            <Link
              href="https://www.facebook.com/dezekil.baron.2024/"
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="none"
            >
              <IconButton
                sx={{
                  backgroundColor: '#0084ff',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#006fdb' },
                  width: 70,
                  height: 70,
                }}
                aria-label="Messenger"
              >
                <SmsIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography
                sx={{ mt: 1, textAlign: 'center', color: '#c7d5e0', fontWeight: 'bold' }}
              >
                Messenger
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
