import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ id, title, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${id}`);
    };

    return (
        <Card 
        sx={{ 
            maxWidth: 300, 
            backgroundColor: 'transparent', 
            color: 'white', 
            border: '1px solid static', 
            borderRadius: '10px', 
            transition: 'all 0.6s ease-in-out',
            '&:hover': { 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                
                } }}>
            <CardMedia
                component="img"
                alt={`Poster de ${title}`}
                height="400"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    sx={{
                        color: 'white', borderColor: 'white',

                        '&:hover': {
                            color: 'Gray'
                        }
                    }}
                    onClick={handleClick
                    }

                >
                    More info
                </Button>
            </CardActions>
        </Card >
    );
};

export default MovieCard;
