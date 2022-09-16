import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Tasks = () => {
  return (
    <div>
       <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
        Type your new Task
        <Button size='small' variant='outlined' startIcon={<AddIcon />}>
          Add Task
        </Button>
      </Box>
    </div>
  );
};

export default Tasks;
