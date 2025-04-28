import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Container,
    Button,
    InputBase,
    alpha,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerLinks = (
        <Box
            sx={{
                width: 250,
                height: '100%',
                backgroundColor: '#000',
                color: '#fff',
                paddingTop: '20px'
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/app" sx={{ color: 'white' }}>
                    <HomeIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/app/info" sx={{ color: 'white' }}>
                    <InfoIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Info" />
                </ListItem>
                <ListItem>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        Género
                    </Button>
                </ListItem>
            </List>
        </Box>
    );
    const linkStyles = {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textDecoration: 'none',
        '&:hover': { opacity: 0.8 },
    };
    const searchBox = (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
                borderRadius: 1,
                padding: '0 10px',
                width: isMobile ? '100%' : '250px',
                maxWidth: isMobile ? '300px' : 'none',
                margin: isMobile ? '0 auto' : '0',
            }}
        >
            <SearchIcon sx={{ color: 'white', mr: 1 }} />
            <InputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'buscar' }}
                sx={{ color: 'white', width: '100%' }}
            />
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <Container>
                <Toolbar disableGutters sx={{ position: 'relative', width: '100%', minHeight: '64px' }}>
                    {/* Logo */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', zIndex: 1 }}
                    >
                        <img src="./public/logo1.png" alt="TakeFinal" style={{ height: '60px', width: '60px' }} />
                    </Box>

                    {/* Buscador */}
                    {isMobile ? (
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', zIndex: 0 }}>
                            {searchBox}
                        </Box>
                    ) : (
                        <Box sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 0
                        }}>
                            {searchBox}
                        </Box>
                    )}

                    {/* Navegación o menú */}
                    {isMobile ? (
                        <>
                            <IconButton color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                                {drawerLinks}
                            </Drawer>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px', marginLeft: 'auto', zIndex: 1 }}>
                            <Box component={Link} to="/app" sx={linkStyles}>
                                <HomeIcon fontSize="large" />
                                <Typography sx={{ ml: 1 }}>Home</Typography>
                            </Box>
                            <Box component={Link} to="/app/info" sx={linkStyles}>
                                <InfoIcon fontSize="large" />
                                <Typography sx={{ ml: 1 }}>Info</Typography>
                            </Box>
                            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                                Género
                            </Button>
                        </Box>
                    )}
                </Toolbar>

            </Container>
        </AppBar>

    );
};

export default Navbar;
