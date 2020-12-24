import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useQueryTodoNodes } from "./queries/nodes/todo/query.hook";
import { useMutateTodo } from "./queries/nodes/todo/update.hook";
import Todo from "./Todo";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  // fixedHeight: {
  //   height: 240,
  // },
}));

const ChecklistDashboard: FC = () => {
  const classes = useStyles();
  const updateTodo = useMutateTodo();
  const { isLoading, data } = useQueryTodoNodes();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {isLoading && <CircularProgress />}
        {(data?.node_todo || []).map((it, key) => (<Grid key={key} item xs={12} md={8} lg={9}>
          <Todo
            todo={it}
            onUpdate={(it) => {
              updateTodo.mutate(it);
            }}
          />
        </Grid>))}
      </Grid>
    </Container>
  );
};

export default ChecklistDashboard;
