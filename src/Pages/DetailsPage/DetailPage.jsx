import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import movies from '../../Movies';

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return (
            <Container sx={{ color: 'white', mt: 5 }}>
                <Typography variant="h4">Película no encontrada 😢</Typography>
                <Button onClick={() => navigate('/')} variant="outlined" sx={{ mt: 2 }}>
                    Volver al inicio
                </Button>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 5, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 600, backgroundColor: '#1c1c1c' }}>
                <CardMedia
                    component="img"
                    image={movie.image}
                    alt={`Poster de ${movie.title}`}
                    sx={{
                        height: '400px',
                        objectFit: 'contain',
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{ color: 'white' }}>
                        {movie.title}
                        <Typography variant="h6" color="gray" sx={{ mb: 2 }}>
                            {movie.genero}
                        </Typography>
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mb: 2, fontSize: '1.1rem' }}>
                        {movie.synopsis}
                    </Typography>
                    <Button
                        onClick={() => navigate(-1)}
                        variant="outlined"
                        sx={{ mt: 3, color: 'white', borderColor: 'white' }}
                    >
                        Volver
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default DetailPage;

