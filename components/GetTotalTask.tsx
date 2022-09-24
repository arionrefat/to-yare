import { useQuery } from '@tanstack/react-query';
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getTodo } from '../utils/models/todo';

const TotalTask: React.FC = () => {
  const { data } = useQuery(['todos'], getTodo);

  const [totalTask, setTotalTask] = useState<string>();

  useEffect(() => {
    setTotalTask(data?.data.length);
  });

  return (
    <>
      <div>
        <Typography variant='h4' color='#8FBCBB'>
          You have total {totalTask} task left
        </Typography>
      </div>
    </>
  );
};

export default TotalTask;
