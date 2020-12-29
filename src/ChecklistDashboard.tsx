import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import ChecklistDashboardDumb from "./ChecklistDashboard.dumb";
import { useAppBar } from "./contexts/app-bar";
import { useQueryNodes } from "./queries/nodes/todo/queryTodoNodes.hook";
import { useMutateTodo } from "./queries/nodes/todo/update.hook";

const ChecklistDashboard: FC = () => {
  const updateTodo = useMutateTodo();
  const router = useRouter();
  const rawId = (router.query as any).id;
  const id = rawId ? parseInt(rawId) : (() => {
    const parts = window.document.location.pathname.split("/");
    return parseInt(parts[parts.length - 1]);
  })();
  const query = useQueryNodes(id);
  const { isLoading, isError, data } = query;
  const { setTitle } = useAppBar();
  useEffect(() => {
    const node = data?.node_todo.find((n) => n.id === id);
    setTitle(node?.summary || "");
  }, [data?.node_todo.length]);
  if (isLoading) return <CircularProgress />;
  if (isError) return <p>Dang! Couldn't get your data. Try again soon?</p>;
  return (<ChecklistDashboardDumb
    {...{
      updateTodo,
      parentId: id,
      data,
      onEditTodo: ({ id }: { id: number }) => router.push(`/node/${id}/edit`),
    }}
  />);
};

export default ChecklistDashboard;
