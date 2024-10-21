import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import './contactPage.scss';

const ContactPage = () => {
  return (
    <Container maxWidth="lg" className="contact-page">
      <Box className="scrollable-container">
        <Grid container spacing={4}>
          {/* Contact Form Section */}
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>Get In Touch</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  We'd love to hear from you! Please fill out the form below, and we will get in touch as soon as possible.
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button variant="contained" color="primary" size="large" sx={{ marginTop: '1rem' }}>
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Company Information Section */}
          <Grid item xs={12} md={5}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>Contact Information</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  Feel free to reach out to us directly via the contact details below.
                </Typography>
                <Box mt={2}>
                  <Typography variant="body1" gutterBottom>
                    <i className="fas fa-phone-alt" style={{ marginRight: '8px', color: '#1976d2' }}></i>
                    +123-456-7890
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <i className="fas fa-envelope" style={{ marginRight: '8px', color: '#1976d2' }}></i>
                    contact@yourcompany.com
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#1976d2' }}></i>
                    123 Real Estate Blvd, YourCity, Country
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
              {/* Map Section */}
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Our Location</Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.139902358118!2d144.95373531589126!3d-37.81659867975156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b5983c7d%3A0x5045675218ce7e33!2z5ZOB5YyX5biC44OT44Or44Ol44Ki44Oq44K544OI44Ov44Op44O844OG44Kr44OV44Ol!5e0!3m2!1sen!2sau!4v1631204956842!5m2!1sen!2sau"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
      </Box>


    </Container>
  );
};

export default ContactPage;
