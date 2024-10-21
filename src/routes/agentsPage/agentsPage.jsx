import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import './agentsPage.scss';

const agents = [
  {
    name: 'Emma Roberts',
    title: 'Senior Real Estate Agent',
    bio: 'Emma has over 10 years of experience in luxury real estate, specializing in high-end properties.',
    email: 'emma@realestate.com',
    phone: '+123-456-7890',
    image: 'https://m.media-amazon.com/images/M/MV5BMmM0Yzk4MmEtZmYwOS00ODAxLWJkODctNGQ2ZWNhZjVjMDE1XkEyXkFqcGc@._V1_.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    name: 'William Pearce',
    title: 'Real Estate Consultant',
    bio: 'William has a deep knowledge of the real estate market and is known for his excellent client relations.',
    email: 'william@realestate.com',
    phone: '+123-456-7890',
    image: 'https://m.media-amazon.com/images/M/MV5BMmM0Yzk4MmEtZmYwOS00ODAxLWJkODctNGQ2ZWNhZjVjMDE1XkEyXkFqcGc@._V1_.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    }
  },
  {
    name: 'Ivana Flow',
    title: 'Real Estate Broker',
    bio: 'Ivana has helped hundreds of clients find their dream homes, with a focus on family-friendly neighborhoods.',
    email: 'ivana@realestate.com',
    phone: '+123-456-7890',
    image: 'https://m.media-amazon.com/images/M/MV5BMmM0Yzk4MmEtZmYwOS00ODAxLWJkODctNGQ2ZWNhZjVjMDE1XkEyXkFqcGc@._V1_.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    }
  },
];

const AgentsPage = () => {
  return (
    <Container maxWidth="lg" className="agents-page">
      <Typography variant="h4" gutterBottom className="agents-title">
        Meet Our Agents
      </Typography>
      <Grid container spacing={4}>
        {agents.map((agent, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="agent-card">
              <CardMedia
                component="img"
                alt={agent.name}
                height="200"
                image={agent.image}
                className="agent-image"
              />
              <CardContent>
                <Typography variant="h6" className="agent-name">{agent.name}</Typography>
                <Typography variant="subtitle1" className="agent-title">{agent.title}</Typography>
                <Typography variant="body2" color="textSecondary" className="agent-bio">
                  {agent.bio}
                </Typography>
                <Box mt={2}>
                  <Typography variant="body1"><i className="fas fa-envelope"></i> {agent.email}</Typography>
                  <Typography variant="body1"><i className="fas fa-phone"></i> {agent.phone}</Typography>
                </Box>
                <Box mt={2} className="agent-social-links">
                  <a href={agent.social.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  <a href={agent.social.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href={agent.social.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AgentsPage;
