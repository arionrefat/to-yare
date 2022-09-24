import { IconButton, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem: React.FC<{ text: string; onRemovedTodo: () => void; onUpdatedTodo: () => void }> = (props) => {
  return (
    <Stack
      direction="row"
      sx={{
        width: 450,
        height: 70,
        backgroundColor: "#4C566A",
      }}
    >
      <IconButton color="primary" aria-label="upload picture" component="label" onClick={props.onUpdatedTodo}>
        <EditIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          alignContent: "center",
          flexGrow: 1,
        }}
      >
        {props.text}
      </Typography>

      <IconButton color="primary" aria-label="upload picture" component="label" onClick={props.onRemovedTodo}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default TodoItem;
