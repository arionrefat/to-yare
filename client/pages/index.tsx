import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

function WeatherApp() {
  const [temp, setTemp] = useState(null);
  const [feelLike, setFeelsLike] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get("api/getWeather").then((response) => {
      setTemp(response.data.main.temp);
      setFeelsLike(response.data.main.feels_like);
      setWeather(response.data.weather);
    });
  }, []);

  if (!temp) return null;

  return (
    <div>
      <h1>{temp}</h1>
      <h1>{feelLike}</h1>
      {/* <h1>{weather}</h1> */}
      <button>
        <Link href="/todo">Todo Page</Link>
      </button>
    </div>
  );
}

export default WeatherApp;
