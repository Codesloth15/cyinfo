import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Container,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const certificates = [
  {
    title: 'INTENSIFYING DIGITAL CITIZENSHIP: Skills Training',
    description: 'Basic Computer Operations, Netiquette, and Web Navigation — Facilitator',
    date: 'Oct 15-16, 2014',
    image: '/images/certificates/digital_citizenship.jpg', // Replace with actual image
  },
  {
    title: 'BPI TECHVOC Training Program',
    description: '120 Hours Participant Training ',
    date: 'Aug 22 - Sep 14, 2023',
    image: '/files/BPI1.png',
  },
  {
    title: 'DICT-MAD006: Introduction to Android Application Development',
    description: '8 Hours Participant',
    date: 'May 7-8, 2024',
    image: '/files/DICT1.png',
  },
  {
    title: 'DICT-MAD009: Using Firebase as an Application Back End',
    description: '8 Hours Participant',
    date: 'May 7-8, 2024',
    image: '/files/DICT2.png',
  },
  {
    title: 'FOUNDATION OF COMPUTER EMERGENCY RESPONSE TEAM (FCERT) TRAINING',
    description: '8 Hours Participant ',
    date: 'Feb 6, 2024',
    image: '/files/DICT3.png',
  },
  {
    title: 'Cybersecurity Advocacy Awareness and Promotion of DICT-CAR Programs',
    description: '8 Hours Participant',
    date: 'Oct 24, 2024',
    image: '/files/DICT4.png',
  },
];

export default function Certificates() {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  return (
    <Box sx={{ backgroundColor: '#171a21', minHeight: '100vh', py: 5, paddingTop: '100px' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: '#66c0f4',
            fontWeight: 'bold',
            mb: 4,
            background: 'linear-gradient(to right, #66c0f4, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Certificates
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {certificates.map((cert, index) => (
            <Grid
              item
              key={index}
              xs={12} // 1 card per row on mobile
              sm={6}  // 2 cards per row on small screens
              sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              <Card
                onClick={() => handleOpen(cert)}
                sx={{
                  width: 500,
                  background: 'linear-gradient(to bottom, #1b2838, #171a21)',
                  cursor: 'pointer',
                  borderRadius: 1,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.7)',
                  },
                }}
                elevation={3}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={cert.image}
                  alt={cert.title}
                  sx={{ borderRadius: '4px 4px 0 0', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: '#8bc53f', fontWeight: 'bold', textAlign: 'center' }}
                  >
                    {cert.title}
                  </Typography>
                  <Divider sx={{ my: 1, borderColor: '#3a4a5a' }} />
                  <Typography
                    variant="body2"
                    sx={{ color: '#c7d5e0', textAlign: 'center', minHeight: 60 }}
                  >
                    {cert.description.length > 70
                      ? cert.description.slice(0, 67) + '...'
                      : cert.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: '#1b2838',
              color: '#c7d5e0',
              borderRadius: 2,
            },
          }}
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 'bold', color: '#8bc53f' }}>{selectedCert?.title}</Typography>
            <IconButton onClick={handleClose} sx={{ color: '#c7d5e0' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Divider sx={{ borderColor: '#3a4a5a' }} />
          <DialogContent>
            {selectedCert && (
              <Box>
                <Box
                  component="img"
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  sx={{
                    width: '100%',
                    borderRadius: 1,
                    mb: 3,
                    objectFit: 'cover',
                  }}
                />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {selectedCert.description}
                </Typography>
                <Typography variant="caption" sx={{ color: '#66c0f4' }}>
                  Date Earned: {selectedCert.date}
                </Typography>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
