import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Tasks = () => {
  return (
    <div>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          width: 300,
          height: 100,
        }}
      >
        Type your new Task
        <Button size='small' variant='outlined' startIcon={<AddIcon />}>
          Add
        </Button>
      </Box>
    </div>
  );
};

export default Tasks;
