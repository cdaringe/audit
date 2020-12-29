import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { useQueryTodoNode } from "../../../src/queries/nodes/todo/queryTodoNode.hook";
import { useMutateTodo } from "../../../src/queries/nodes/todo/update.hook";
import Todo from "../../../src/Todo.dumb";
import debounce from "lodash/debounce";

const Edit: FC = () => {
  const router = useRouter();
  const rawId = (router.query as any).id;
  const id = rawId ? parseInt(rawId) : (() => {
    const parts = window.document.location.pathname.split("/");
    return parseInt(parts[parts.length - 1]);
  })();
  const { isLoading, data: node } = useQueryTodoNode(id);
  const mutations = useMutateTodo();
  const mutate = useCallback(
    debounce(
      (...args: Parameters<typeof mutations.mutate>) =>
        mutations.mutate(...args),
      1000,
      {
        trailing: true,
      },
    ) as (typeof mutations.mutate),
    [mutations.mutate],
  );
  if (!Number.isInteger(id)) return <p>404</p>;
  if (isLoading) return <CircularProgress />;
  if (!node?.node_todo.length) return <p>404</p>;
  return <Todo todo={node.node_todo[0]} isEditMode onUpdate={mutate} />;
};
export default Edit;
