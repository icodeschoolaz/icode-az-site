import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardHeader, Container } from '@mui/material';
import graphic from '../images/iCode_Graphic.png';
import { Locations } from '../utils/constants';

const styles = {
    paperContainer: {
        borderRadius: '0 0 4px 4px'
    }
};
const AppHero = () => {
    return (
        <Container maxWidth="xl" disableGutters>
            <Card style={styles.paperContainer}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={graphic}
                    title="iCode STEM Programs & Camps"
                />
                <CardContent>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    {Locations.map((page) => (
                        <Card key={page.title} sx={{marginLeft: 1, marginRight: 1}}>
                            <CardHeader title={page.title} sx={{textAlign: 'center'}}></CardHeader>
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default AppHero;