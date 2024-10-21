import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, TextField } from '@mui/material';
import aboutImage from '../../assets/img/image.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './aboutPage.scss'

const features = [
  { icon: 'fas fa-home', title: 'Premium Properties', description: 'Offering a wide selection of luxurious homes, apartments, and villas tailored to suit your lifestyle and investment needs.' },
  { icon: 'fas fa-map-marker-alt', title: 'Prime Locations', description: 'Our properties are located in the most desirable neighborhoods with easy access to amenities, schools, and business centers.' },
  { icon: 'fas fa-calendar-check', title: 'Hassle-Free Booking', description: 'Easily schedule property viewings and make reservations with just a few clicks through our online platform.' },
  { icon: 'fas fa-headset', title: '24/7 Customer Support', description: 'Our team is always available to assist with any questions or issues regarding your property search or booking process.' },
];

const statistics = [
  { number: '1,200+', label: 'Properties Sold', description: 'Successful property sales across the country.' },
  { number: '500+', label: 'Happy Clients', description: 'Satisfied clients who found their perfect home with us.' },
  { number: '24/7', label: 'Support', description: 'Always-available support to assist clients with their property journey.' },
];

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '4rem 0' }}>
      
      {/* Scrollable Box for About Us Section */}
      <Box className="scrollable-box">
        
        {/* Features Section */}
        <Grid container spacing={4} sx={{ marginBottom: '4rem' }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index} className="feature">
              <i className={`icon ${feature.icon}`}></i>
              <Box className="text">
                <Typography variant="h6">{feature.title}</Typography>
                <Typography variant="body1">{feature.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

{/* Insights Section */}
<Box className="insight-section">
  <Box className="insight-text">
    <Typography variant="h4" className="insight-title">Discover Your Perfect Property</Typography>
    <Typography variant="body1" className="insight-description">
      Whether you're looking to buy your first home, invest in real estate, or find a luxury apartment, we have the perfect property for you. Our platform offers a wide range of listings that cater to every need.
    </Typography>
  </Box>
  <Box className="insight-image-container">
    <img src={aboutImage} alt="Property Insights" className="insight-image" />
  </Box>
</Box>




        {/* Statistics Section */}
        <Grid container spacing={4} className="statistics">
          {statistics.map((stat, index) => (
            <Grid item xs={12} md={4} key={index} className="stat-item">
              <Typography variant="h3">{stat.number}</Typography>
              <Typography variant="h6">{stat.label}</Typography>
              <Typography variant="body1">{stat.description}</Typography>
            </Grid>
          ))}
        </Grid>

      </Box>

      {/* Call-to-Action Section */}
      <Box className="cta-section">
        <Typography variant="h5">Stay Updated on the Latest Properties</Typography>
        <Typography variant="body1">
          Be the first to know about new listings and exclusive offers. Subscribe to our newsletter.
        </Typography>
        <Box component="form">
          <TextField label="Email Here" variant="outlined" />
          <Button variant="contained" color="primary">Subscribe</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;