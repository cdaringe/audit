import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQueryNodes } from "./queries/nodes/todo/queryTodoNodes.hook";
import { useMutateTodo } from "./queries/nodes/todo/update.hook";
import Todo, { Props as TodoProps } from "./Todo.dumb";
import { FC } from "react";

const ChecklistDashboardDumb: FC<{
  updateTodo: ReturnType<typeof useMutateTodo>;
  parentId: number;
  data: ReturnType<typeof useQueryNodes>["data"];
  onEditTodo: TodoProps["onEdit"];
}> = ({ updateTodo, data, parentId, onEditTodo }) => {
  const toPaint = (data.node_todo || []).filter((n) =>
    n.parent_id === parentId
  );
  return (
    <Grid container spacing={3}>
      {!toPaint.length && <p>No work tracked yet. Let's get busy.</p>}
      {!!toPaint.length && toPaint.map((
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
