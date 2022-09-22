import { apikey } from './../config';
import { useState, useEffect } from 'react';
import axios from 'axios';

function url(location: string[], unit: string): string {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${apikey}&units=${unit}`;
}
console.log(url(['23.8245', '90.4056'], 'metric'))

function WeatherApp() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(url(['23.8245', '90.4056'], 'metric')).then((response) => {
      setPost(response.data.main.temp);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <h1>{post}</h1>
    </div>
  );
}

export default WeatherApp;
