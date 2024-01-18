import * as React from 'react';
import { Box, Button, Container, Grid, MenuItem, Typography } from '@mui/material';
import { Locations } from '../utils/Constants';

const AppFooter = () => {
    return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: 4,
        paddingBottom: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Box sx={{flexGrow: 1}} display={{xs: 'none', sm: 'block'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {Locations.map((page) => (
                        <MenuItem key={page.title}>
                            <Button href={page.url}>{page.title}</Button>
                        </MenuItem>
                    ))}
                </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} iCode Schools of Arizona`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AppFooter;