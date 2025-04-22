import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Container,
    Button,
    InputBase,
    alpha
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ gap: '30px', width: '100%' }}>
                    {/* Logo */}
                    <img src="./logo1.png" alt="TakeFinal" style={{ height: '60px', width: '60px' }} />

                    {/* Home */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            '&:hover': { opacity: 0.8 }
                        }}
                    >
                        <HomeIcon fontSize="large" />
                        <Typography sx={{ ml: 1 }}>Home</Typography>
                    </Box>


                    {/* Info */}
                    <Box
                        component={Link}
                        to="/info"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            '&:hover': { opacity: 0.8 }
                        }}
                    >
                        <InfoIcon fontSize="large" />
                        <Typography sx={{ ml: 1 }}>Info</Typography>
                    </Box>

                    {/* Botón Género */}
                    <Button
                        variant="outlined"
                        sx={{ color: 'white', borderColor: 'white' }}
                    >
                        Género
                    </Button>

                    {/* Espacio para empujar el buscador a la derecha */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Buscador */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
                            '&:hover': {
                                backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25),
                            },
                            borderRadius: 1,
                            padding: '0 10px',
                            width: '250px',
                        }}
                    >
                        <SearchIcon sx={{ color: 'white', mr: 1 }} />
                        <InputBase
                            placeholder="Buscar…"
                            inputProps={{ 'aria-label': 'buscar' }}
                            sx={{ color: 'white', width: '100%' }}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;