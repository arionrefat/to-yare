import { useRef } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'rgb(232, 241, 250)',
    },
    '& .MuiFilledInput-root:hover': {
      backgroundColor: 'rgb(250, 232, 241)',
      '@media (hover: none)': {
        backgroundColor: 'rgb(232, 241, 250)',
      },
    },
    '& .MuiFilledInput-root.Mui-focused': {
      backgroundColor: 'rgb(250, 241, 232)',
    },
    '&.MuiFormHelperText-root': {
      backgroundColor: 'rgb(255, 255, 255)',
    },
  },
}));

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    console.log(enteredText);

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };
  const classes = useStyles();

  return (
    <form>
      <Stack direction='column' spacing={2} p={8}>
        <TextField
          helperText='Please enter your tasks'
          id='demo-helper-text-aligned'
          label='Todos'
          variant='filled'
          className={classes.root}
          rows={5}
          inputRef={todoTextInputRef}
        />

        <Button
          startIcon={<AddIcon />}
          variant='contained'
          onClick={submitHandler}
        >
          Todo
        </Button>
      </Stack>
    </form>
  );
};
export default NewTodo;
