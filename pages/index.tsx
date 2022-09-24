import axios from "axios";
import Clock from "../components/clock";
import Button from "@mui/material/Button";
import { Box, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

function WeatherApp() {
  const { data: response } = useQuery(["weather"], async () => {
    return await axios.get("api/getWeather");
  });
  const temp = response?.data?.main?.temp;
  const feelLike = response?.data?.main?.feels_like;
  const weather = response?.data?.weather?.[0]?.description;

  if (!temp) return null;

  return (
    <Stack>
      <Box
        component="span"
        sx={{
          m: 2,
          p: 5,
          flexDirection: "center",
          backgroundColor: "primary.dark",
        }}
      >
        <Clock />
      </Box>

      <Box
        component="span"
        sx={{
          m: 1,
          p: 5,
          flexDirection: "center",
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h6">
          {feelLike ? `It feels like ${feelLike}°C` : `unavailable feels like temperature`}
        </Typography>
      </Box>

      <Box
        component="span"
        sx={{
          m: 1,
          p: 5,
          flexDirection: "center",
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h6">{temp ? `Today's temperature is ${temp}°C` : "unavailable temperature"}</Typography>
      </Box>

      <Box
        component="span"
        sx={{
          m: 1,
          p: 5,
          flexDirection: "center",
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h6">{weather ? `The sky is looking ${weather}` : "unavailable weather"}</Typography>
      </Box>

      <Button variant="contained" size="large" href="/todo">
        Todo
      </Button>
    </Stack>
  );
}

export default WeatherApp;
