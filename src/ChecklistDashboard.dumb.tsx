import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useQueryTodoNodes } from "./queries/nodes/todo/queryTodoNodes.hook";
import { useMutateTodo } from "./queries/nodes/todo/update.hook";
import Todo, { Props as TodoProps } from "./Todo.dumb";
import { FC } from "react";

const ChecklistDashboardDumb: FC<{
  updateTodo: ReturnType<typeof useMutateTodo>;
  useQueryTodoNodes: ReturnType<typeof useQueryTodoNodes>;
  onEditTodo: TodoProps["onEdit"];
}> = ({ updateTodo, useQueryTodoNodes: { isLoading, data }, onEditTodo }) => {
  return (
    <Grid container spacing={3}>
      {isLoading && <CircularProgress />}
      {(data?.node_todo || []).map((
        it,
        key,
      ) => (<Grid key={key} item xs={12} md={8} lg={9}>
        <Todo
          todo={it}
          onUpdate={(it) => {
            updateTodo.mutate(it);
          }}
          onEdit={onEditTodo}
        />
      </Grid>))}
    </Grid>
  );
};

export default ChecklistDashboardDumb;
