import { Autocomplete, Button, Grid, Icon, IconButton, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import { countryCodes } from './data/countryCodes';
import React from 'react';

const useStyles = makeStyles({
  App: {
    textAlign: 'center',
    margin: '20px auto',
  },
  Container: {
    border: '0 solid #afafaf',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0 0 20px #afafaf'
  },
  SearchButton: {
    width: '100%',
    height: '100%'
  },
  postal: {
    width: '100%'    
  }
})

function App() {
  const classes = useStyles()

  return (
    <div className={classes.App}>
      <header className="App-header">
        <Container maxWidth="lg" className={classes.Container}>
          <Typography variant="h1">Pang Zippopotam</Typography>
          <Grid container spacing={2} padding={5}>
            <Grid item xs={5}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countryCodes}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Country" />}
                defaultValue={countryCodes.find((countryCode)=> countryCode.code === 'US')}
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField id="outlined-basic" label="Zip Code/Postal Code" variant="outlined" className={classes.postal}/>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" size="large" startIcon={<SearchIcon />} className={classes.SearchButton}>Search</Button>
            </Grid>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
