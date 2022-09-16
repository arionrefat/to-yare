import axios from 'axios'
import {apikey} from './config'

const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=27.2046&lon=77.4977&appid=${apikey}`;

axios.get(url)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
