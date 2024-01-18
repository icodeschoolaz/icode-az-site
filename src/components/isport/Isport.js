import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material';

import graphic from '../../images/iSports_header.png';
import IconList from '../library/IconList';
import { IsportInfo } from '../../utils/Constants';

const styles = {
    paperContainer: {
        borderRadius: '0 0 4px 4px',
        backgroundColor: '#0d0d0d',
        color: '#ffffff'
    }
};
const Isport = () => {
    return (
        <Card style={styles.paperContainer}>
            <Box display={{xs: "none", sm: "none", md: "block"}}>
                <CardMedia
                    sx={{height: 300 }}
                    image={graphic}
                    title="iCode iSport & eSport League"
                />
            </Box>
            <Box display={{xs: "block", sm: "block", md: "none"}}>
                <CardMedia
                    sx={{height: 200 }}
                    image={graphic}
                    title="iCode iSport & eSport League"
                />
            </Box>
            <CardContent>
            <Box sx={{ width: '100%' }} display={{xs: "block", sm: "block", md: "block", lg: "block"}}>
                <Typography variant='h4' sx={{marginBottom:1}}>
                    Start their STEM learning with eSports!
                </Typography>
                <Typography variant='body1' sx={{marginBottom:4}}>
                    eSports is competitive video gaming for all skill levels. Enrolling your child in an eSports League can offer a variety of benefits that extend beyond just playing video games. Here are several reasons why you might consider getting your kid involved:
                </Typography>   
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <IconList list={IsportInfo} cssClass={`theme-tertiary`} avatarClass={'theme-purple'} max={3}/>
                </Box>
            </Box>
            <Box sx={{ width: '100%' }} display={{xs: "block", sm: "block", md: "block", lg: "block"}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Typography variant='h4' sx={{marginBottom:1}}>
                        Competitive Teams will play titles such as Fortnite, Rocket League, Overwatch 2, Apex Legends...
                    </Typography>
                    <Typography variant='body1' sx={{marginBottom:4}}>
                        <List sx={{ listStyleType: 'disc', marginLeft:4, marginRight:4 }}>
                            <ListItem sx={{ display: 'list-item' }}>
                                Ages 10-18
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Practice weekly (2-hours)
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Tournament Play Monthly
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Coaching
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Game Night Discounts
                            </ListItem>
                        </List>
                    </Typography>
                </Box>
            </Box>
            </CardContent>
        </Card>
    )
}

export default Isport;