import { Box, IconButton, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '../utils/models/todo';

const TodoItem: React.FC<{ text: string; onRemovedTodo: () => void }> = (
  props
) => {
  const queryClient = useQueryClient();

  const updateTodoM = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const updateTodoHandler = async (todoId: string) => {
    const enteredName = prompt('Please enter your updated todo') as string;
    if (enteredName) {
      await updateTodoM.mutateAsync({ id: todoId, task: enteredName });
    }
  };

  return (
    <Stack
      direction='row'
      sx={{
        width: 450,
        height: 70,
        backgroundColor: '#4C566A',
      }}
    >
      <IconButton
        color='primary'
        aria-label='upload picture'
        component='label'
        onClick={props.updateTodoHandler}
      >
        <EditIcon />
      </IconButton>
      <Typography
        variant='h6'
        sx={{
          alignContent: 'center',
          flexGrow: 1,
        }}
      >
        {props.text}
      </Typography>

      <IconButton
        color='primary'
        aria-label='upload picture'
        component='label'
        onClick={props.onRemovedTodo}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default TodoItem;
