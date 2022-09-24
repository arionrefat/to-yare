import { useRef } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    console.log(enteredText)

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form>
      <Stack direction='column' spacing={2} p={8}>
        <TextField
          helperText='Please enter your tasks'
          id='demo-helper-text-aligned'
          label='Todos'
          inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
          inputRef={todoTextInputRef}
        />
        <Button startIcon={<AddIcon />} variant='contained' onClick={submitHandler}>
          Todo
        </Button>
      </Stack>
    </form>
  );
};
export default NewTodo;
