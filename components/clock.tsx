import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(
      (): void => setClock(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(clock);
    };
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const dates: string = new Date().toLocaleDateString('en-US', options);

  return (
    <>
      <div>
        <Typography variant='h4' color='#8FBCBB'>{dates}</Typography>
        <Typography variant='h4' color='#8FBCBB'>{clock}</Typography>
      </div>
    </>
  );
};

export default Clock;
