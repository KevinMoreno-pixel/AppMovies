import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button
} from '@mui/material';

const MovieCard = () => {
    return (
        <Card sx={{ maxWidth: 300, backgroundColor: '#1c1c1c', color: 'white' }}>
            <CardMedia
                component="img"
                alt="Poster de la película"
                height="400"
                image="https://pics.filmaffinity.com/Vengadores_Endgame-135478227-large.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Título de la Película
                </Typography>
                <Typography variant="body2" color="gray">
                    Una breve sinopsis de la película va aquí. Suspenso, drama o acción en unas pocas líneas.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                    Ver más
                </Button>
            </CardActions>
        </Card>
    );
};

export default MovieCard;