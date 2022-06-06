import React, { useMemo, useState } from 'react'
import { Autocomplete, Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import countryCodes from 'src/data/countryCodes';
import { GET_ZIPPO_INFO } from 'src/gql/queries/zippoInfo';
import { useQuery } from '@apollo/client';
import { useStyles } from './Zippopotam.styles';

export function Zippopotam () {
  const classes = useStyles()
  const [countryCode,] = useState('US')
  const [postalCode,] = useState('91405')

  const { loading, error, data } = useQuery(GET_ZIPPO_INFO, {
    variables: { countryCode: 'US', postalCode: '91405' },
  })

  const ResultsInfo = useMemo(() => {
    if (loading) {
      return <div>Loading...</div>
    }
  
    if (error) {
      return <div>error</div>
    }

    return <Box>{JSON.stringify(data)}</Box>
  }, [data, error, loading])

  return (
    <Container maxWidth="lg">
      <Paper elevation={0}>
        <Typography variant="h1" padding={5}>Pang Zippopotam</Typography>
        <Divider />
        <Grid container spacing={2} padding={5}>
          <Grid item xs={5}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countryCodes}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Country" />}
              defaultValue={countryCodes.find((c)=> c.code === countryCode)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Zip Code/Postal Code" variant="outlined" defaultValue={postalCode} className={classes.postal}/>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size="large" startIcon={<SearchIcon />} className={classes.SearchButton}>Search</Button>
          </Grid>
        </Grid>
        <Divider />
        {data && data.zippoInfo && (
          <Grid container spacing={2} padding={5}>
            <Grid container spacing={2} padding={5} style={{ textAlign: 'center' }}>
              <Typography variant="h4">{data.zippoInfo.country}({data.zippoInfo.countryAbbreviation})</Typography>
            </Grid>
            <Grid container spacing={2} padding={5}>
              {data.zippoInfo.places && data.zippoInfo.places.map((place) => (
                <Card sx={{ minWidth: 345 }} elevation={2} key={`${place.state}-${place.placeName}`}>
                  <CardHeader title={place.placeName} subheader={`${place.state} (${place.stateAbbreviation})`}/>
                  <Divider />
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }}>
                      Latitude {place.latitude}
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                      Longitude {place.longitude}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        )}
      </Paper>
    </Container>
  )
}
