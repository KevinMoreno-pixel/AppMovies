import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Box
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const people = [
    {
        name: 'Kevin Andres Moreno Perez',
        role: 'Desarrollador Frontend',
        avatar: 'https://i.imgur.com/1cTP17o_d.webp?maxwidth=760&fidelity=grand',
        Universidad: 'Universidad de la Amazonia',
        Edad: '22 Años',
        GitHub: 'https://github.com/KevinMoreno-pixel',
        instagram: 'https://www.instagram.com/kevin_ampz'

    },
    {
        name: 'Juan David Ramirez Alvarez',
        role: 'Desarrollador Backend',
        avatar: 'https://i.imgur.com/iFyjUYr.png',
        Universidad: 'Universidad de la Amazonia',
        Edad: '21 Años',
        GitHub: 'https://github.com/KevinMoreno-pixel',
        instagram: 'https://www.instagram.com/juan_ramirez004'
    }
];

const InfoPage = () => {
    return (
        <Container sx={{ mt: 6, height: '100vh' }} >
            <Typography variant="h4" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                Sobre nosotros
            </Typography>

            <Grid container spacing={7} justifyContent="center">
                {people.map((person, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} >
                        <Card
                            sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                color: 'white',
                                height: 300,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                py: 7,
                                '&:hover': {
                                    backgroundColor: 'black',
                                    transform: 'scale(1.05)',
                                    transition: 'all 0.3s ease-in-out',
                                },

                            }}
                        >
                            <Avatar
                                alt={person.name}
                                src={person.avatar}
                                sx={{ width: 100, height: 100 }}
                            />
                            <CardContent
                                sx={{
                                    textAlign: 'center',
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    px: 2,
                                    py: 1,
                                }}
                            >
                                <Typography variant="h6" noWrap>{person.name}</Typography>
                                <Typography variant="subtitle1" sx={{ color: 'gray' }}>
                                    {person.role}
                                </Typography>
                                <Typography
                                    variant="body2"
                                >
                                    {person.Universidad}
                                </Typography>
                                <Typography
                                    variant="body2"
                                >
                                    {person.Edad}
                                </Typography>

                            </CardContent>
                            <Box
                                variant="body2"
                            >
                                <a href={person.GitHub}>
                                    <GitHubIcon fontSize="large"
                                        sx={{
                                            color: 'white',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                color: 'action.active'
                                            }

                                        }} />
                                </a>
                                <a href={person.instagram}>
                                    <InstagramIcon fontSize="large"
                                        sx={{
                                            color: 'white',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                color: 'action.active'
                                            }

                                        }} />
                                </a>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default InfoPage;

