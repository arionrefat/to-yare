import { useState, useEffect } from 'react';
import axios from 'axios';
import Clock from './dashboard/components/clock';
import Button from '@mui/material/Button';
import { Box, Stack, Typography } from '@mui/material';

function WeatherApp() {
  const [temp, setTemp] = useState(null);
  const [feelLike, setFeelsLike] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get('api/getWeather').then((response) => {
      setTemp(response.data.main.temp);
      setFeelsLike(response.data.main.feels_like);
      setWeather(response.data.weather[0].description);
    });
  }, []);

  if (!temp) return null;

  return (
    <Stack>
      <Box
        component='span'
        sx={{
          m: 5,
          p: 5,
          flexDirection: 'center',
          backgroundColor: 'primary.dark',
        }}
      >
        <Clock />
      </Box>

      <Box
        component='span'
        sx={{
          m: 1,
          p: 5,
          flexDirection: 'center',
          backgroundColor: 'primary.dark',
        }}
      >
        <Typography variant='h6'>It feels like {feelLike}°C</Typography>
      </Box>

      <Box
        component='span'
        sx={{
          m: 5,
          p: 5,
          flexDirection: 'center',
          backgroundColor: 'primary.dark',
        }}
      >
        <label>Today's temperature is {temp}°C</label>
      </Box>
      <h1>The sky is looking {weather}</h1>
      <Button variant='contained' size='large' href='/todo'>
        Todo
      </Button>
    </Stack>
  );
}

export default WeatherApp;
