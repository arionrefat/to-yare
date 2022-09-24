import axios from 'axios';
import Clock from '../components/clock';
import Button from '@mui/material/Button';
import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import TotalTask from '../components/GetTotalTask';

function WeatherApp() {
  const { data: response } = useQuery(['weather'], async () => {
    return await axios.get('api/getWeather');
  });
  const temp = response?.data?.main?.temp;
  const feelLike = response?.data?.main?.feels_like;
  const weather = response?.data?.weather?.[0]?.description;

  if (!temp) return null;

  return (
    <>
      <Stack
        sx={{
          m: 2,
          p: 5,
          flexDirection: 'center',
          backgroundColor: '#5E81AC',
        }}
      >
        <Clock />
      </Stack>

      <Box
        sx={{
          m: 2,
          p: 5,
          flexDirection: 'center',
          backgroundColor: '#5E81AC',
        }}
      >
        <Typography variant='h4' color='#D08770'>
          {feelLike
            ? `It feels like ${feelLike}°C`
            : `unavailable feels like temperature`}
        </Typography>

        <Typography variant='h4' color='#EBCB8B'>
          {weather ? `The sky is looking ${weather}` : 'unavailable weather'}
        </Typography>
        <Typography variant='h4' color='#BF616A'>
          {temp
            ? `Today's temperature is ${temp}°C`
            : 'unavailable temperature'}
        </Typography>
      </Box>

      <Stack
        sx={{
          m: 2,
          p: 5,
          flexDirection: 'center',
          backgroundColor: '#5E81AC',
        }}
      >
        <TotalTask />
      </Stack>

      <Button variant='contained' size='large' href='/todo'>
        Todo
      </Button>
    </>
  );
}

export default WeatherApp;
