import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MovieCard from '../../Components/CardsPrincipal/Card'; // Asegúrate de ajustar la ruta si es diferente

const HomePage = () => {
    return (
        <Container sx={{ mt: 4, justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
                Películas destacadas ✨
            </Typography>

            <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MovieCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <MovieCard />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;