import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import { FC, useState } from "react";
import type { Node_Todo } from "./api";

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

export type Props = {
  isEditMode?: true;
  todo: Node_Todo;
  onUpdate: (it: Node_Todo) => void;
  onEdit?: (it: Node_Todo) => void;
};
const Todo: FC<Props> = (props) => {
  const { isEditMode } = props;
  const [editableTodo, setEditableTodo] = useState({ ...props.todo });
  const model = isEditMode ? editableTodo : props.todo;
  const updateModel = (next: Props["todo"]) => {
    setEditableTodo(next);
    props.onUpdate(next);
  };
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <div
          className={classes.avatar}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {!isEditMode && <Tooltip
            title="edit"
          >
            <IconButton
              color="primary"
              aria-label="edit"
              component="span"
              onClick={() => props?.onEdit(model)}
            >
              <EditIcon color="primary" />
            </IconButton>
          </Tooltip>}
          <span style={{ marginLeft: 8 }} />
          <Avatar
            src={`https://robohash.org/${props.todo.id}?set=set4`}
            alt="assigned to"
          />
        </div>
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox
              checked={!!model.is_complete}
              onChange={(_, is_complete) => {
                updateModel({ ...model, is_complete });
              }}
              name={String(model.id)}
            />}
            label={isEditMode
              ? <TextField
                value={model.summary}
                onChange={(evt) => {
                  const summary = evt.currentTarget.value;
                  // if (!summary) return;
                  updateModel({ ...model, summary });
                }}
                error={!model.summary.trim()}
              />
              : model.summary}
          />
        </FormGroup>
        {isEditMode
          ? <TextareaAutosize
            style={{ width: "100%", minHeight: "4rem" }}
            aria-label="Long description of task"
            placeholder="Long description"
            defaultValue={model.full_text}
            onChange={(evt) => {
              updateModel(
                { ...model, full_text: evt.currentTarget.value },
              );
            }}
          />
          : (model.full_text && <p>{model.full_text}</p>)}
      </FormControl>
    </Paper>
  );
};

export default Todo;
