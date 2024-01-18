import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { Box, Button, Container, MenuItem } from '@mui/material';
import logo from '../images/logo.png';
import { Locations } from '../utils/Constants';

const NoPage = () => {
    return (
        <AppBar position="static" className='theme-secondary'>
            <Container maxWidth="xl">
                <Toolbar>
                    <Link href="/" alt="iCode AZ Home">
                        <img src={logo} className='app-logo' alt="icode STEM Education" />
                    </Link>
                    <Box sx={{flexGrow: 1}} display={{xs: 'none', sm: 'block'}}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            {Locations.map((page) => (
                                <MenuItem key={page.title}>
                                    <Button href={page.url} variant="contained" sx={{padding:0}}>{page.title}</Button>
                                </MenuItem>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NoPage;