import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { Box, Button, Container, MenuItem } from '@mui/material';
import logo from '../images/logo.png';
import { Locations } from '../utils/constants';

const AppHeader = () => {
    return (
        <AppBar position="static" className='theme-secondary'>
            <Container maxWidth="xl">
                <Toolbar>
                    <Link>
                        <img src={logo} className='app-logo' alt="icode STEM Education" />
                    </Link>

                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    {Locations.map((page) => (
                        <MenuItem key={page.title}>
                            <Button href={page.url} variant="contained">{page.title}</Button>
                        </MenuItem>
                    ))}
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AppHeader;