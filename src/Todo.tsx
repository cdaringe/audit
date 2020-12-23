import { FunctionalComponent, h } from "preact";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import type { Node_Todo } from "./api";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(1),
  },
  avatar: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  formControl: {
    margin: theme.spacing(3),
    width: "100%",
    alignItems: "flex-start",
  },
}));

const Todo: FunctionalComponent<{
  todo: Node_Todo;
  onUpdate: (it: Node_Todo) => void;
}> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <div className={classes.avatar}>
          <Avatar
            src={`https://robohash.org/${props.todo.id}?set=set4`}
            alt="assigned to"
          />
        </div>
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox
              checked={!!props.todo.is_complete}
              onChange={() => {
                props.onUpdate(
                  { ...props.todo, is_complete: !props.todo.is_complete },
                );
              }}
              name={String(props.todo.id)}
            />}
            label={props.todo.summary}
          />
        </FormGroup>
        {props.todo.full_text && <p>{props.todo.full_text}</p>}
      </FormControl>
    </Paper>
  );
};

export default Todo;
