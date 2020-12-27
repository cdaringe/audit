import { useQueryTodoNodes } from "./queries/nodes/todo/queryTodoNodes.hook";
import { useMutateTodo } from "./queries/nodes/todo/update.hook";
import { FC } from "react";
import ChecklistDashboardDumb from "./ChecklistDashboard.dumb";

import { useRouter } from "next/router";
const ChecklistDashboard: FC = () => {
  const updateTodo = useMutateTodo();
  const useQueryTodoNodes_ = useQueryTodoNodes();
  const router = useRouter();
  return (<ChecklistDashboardDumb
    {...{
      updateTodo,
      useQueryTodoNodes: useQueryTodoNodes_,
      onEditTodo: ({ id }: { id: number }) => router.push(`/node/${id}/edit`),
    }}
  />);
};

export default ChecklistDashboard;
