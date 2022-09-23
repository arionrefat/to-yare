import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Clock from './components/clock';

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
    <div>
      <Clock />
      <h1>Today's temperature is {temp}°C</h1>
      <h1>It feels like {feelLike}°C</h1>
      <h1>The sky is looking {weather}</h1>
      <button>
        <Link href='/todo'>Todo Page</Link>
      </button>
    </div>
  );
}

export default WeatherApp;
