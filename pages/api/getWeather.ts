import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const apikey = process.env.OPENWEATHER_API!;

function url(location: string[], unit: string): string {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${apikey}&units=${unit}`;
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await axios.get(url(["23.8245", "90.4056"], "metric"));
    res.status(200).json(data);
  } catch (err: any) {
    res.status(400).json(process.env.NODE_ENV === "production" ? "Cannot get weather" : err?.response);
  }
}
