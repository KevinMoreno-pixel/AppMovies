import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MovieCard from '../../Components/CardsPrincipal/Card';
import movies from '../../Movies';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  

    return (
        <Container sx={{ mt: 4, justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                Películas destacadas ✨
            </Typography>

            <Grid container spacing={5} sx={{ justifyContent: 'center', height: '100vh' }}>
                {movies.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4}>
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            image={movie.image}
                            synopsis={movie.synopsis}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;
