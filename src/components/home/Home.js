import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Box, CardHeader, Grid, Link, ListItem, ListItemAvatar, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import LanguageIcon from '@mui/icons-material/Language';

import { Locations } from '../../utils/Constants';
import parse from 'html-react-parser'
import graphic from '../../images/iCode_Graphic.png';

const styles = {
    paperContainer: {
        borderRadius: '0 0 4px 4px'
    }
};
const Home = () => {
    const [value, setValue] = React.useState(0);
  
    const a11yProps = (index) => {
      return {
        key: `icode-key-${index}`, 
        id: `icode-tab-${index}`,
        'aria-controls': `icode-tabpanel-${index}`,
      };
    }
    
    const CustomTabPanel = (props) => {
        const { children, value, index, ...other } = props;
    
        return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
        );
    }

    const LocationContent = (props) => {
        const { page } = props;
        return (
            <CardContent>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LanguageIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Link href={page.url} target="_blank" title={`iCode ${page.title} Programs`} alt={`iCode ${page.title} Programs`}>{`iCode ${page.title} Website`}</Link>
                    }
                    secondary={`${page.title} Programs & Camps`}
                    />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LocalPhoneIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Link href={`tel:${page.phone}`} target="_blank" title={`Call iCode ${page.title}`} alt={`Call iCode ${page.title}`}>{page.phone}</Link>
                    } />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <EmailIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <Link href={`mailto:${page.email}`} target="_blank" title={`Email iCode ${page.title}`} alt={`Email iCode ${page.title}`}>{page.email}</Link>
                    }/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <HomeIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={page.address1} secondary={page.address2} />
                </ListItem>
                {parse(page.map)}
            </CardContent>
        )
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Card style={styles.paperContainer}>
            <Box display={{xs: "none", sm: "none", md: "block"}}>
                <CardMedia
                    sx={{height: 300 }}
                    image={graphic}
                    title="iCode STEM Programs & Camps"
                />
            </Box>
            <Box display={{xs: "block", sm: "block", md: "none"}}>
                <CardMedia
                    sx={{height: 200 }}
                    image={graphic}
                    title="iCode STEM Programs & Camps"
                />
            </Box>
            <CardContent>
            <Typography variant='body1' sx={{marginBottom:4}}>
                STEM Education Programs, Holiday & Summer Camps for kids in Arizona. iCode offers a wide array of courses, ranging from coding and robotics to game design and artificial intelligence. By integrating the latest tools, languages, and technologies into their curriculum, iCode equips students with the skills that are in high demand across various industries.
            </Typography>
            <Typography variant='h4' sx={{marginBottom:2, textAlign: 'center'}}>Find the iCode location nearest you:</Typography>
            <Box sx={{ width: '100%' }} display={{xs: "block", sm: "block", md: "block", lg: "none"}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="icode locations">
                        {Locations.map((page, idx) => (
                            <Tab label={page.title} {...a11yProps(idx)} />
                        ))}
                    </Tabs>
                </Box>
                {Locations.map((page, idx) => (
                    <CustomTabPanel value={value} index={idx} key={`tab-panel-key${idx}`}>
                        <Card key={page.title} sx={{marginBottom: 2}}>
                            <LocationContent page={page}/>
                        </Card>
                    </CustomTabPanel>
                ))}
            </Box>
            <Box sx={{ width: '100%' }} display={{xs: "none", sm: "none", md: "none", lg: "block"}}>
                <Grid container>
                {Locations.map((page) => (
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card key={page.title} sx={{marginLeft: 1, marginRight: 1, marginBottom: 2}}>
                            <CardHeader title={
                                <Link href={page.url} title={`Go to iCode ${page.title}`}>
                                    {page.title}
                                    <ShortcutIcon sx={{marginLeft: 2}}/>
                                </Link>
                            } sx={{textAlign: 'center'}}></CardHeader>
                            <LocationContent page={page}/>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Box>
            </CardContent>
        </Card>
    )
}

export default Home;