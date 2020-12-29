import { useMutation, useQueryClient } from "react-query";
import { Node_Todo } from "../../../api";
import { useClient } from "../../../contexts/gql-client";
import { GetTodoNodesQueryResult } from "./queryTodoNodes.gen";
import { queryKey as getTodoNodesQueryKey } from "./queryTodoNodes.hook";

import { getSdk, UpdateTodoMutationResult } from "./updateTodoNode.gen";

type Ctx = { previousTodos: GetTodoNodesQueryResult };

export const useMutateTodo = () => {
  const client = useClient();
  const sdk = getSdk(client);
  const queryClient = useQueryClient();
  return useMutation<UpdateTodoMutationResult, unknown, Node_Todo, Ctx>(
    (it) => sdk.UpdateTodo(it),
    {
      onMutate: async (it) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(getTodoNodesQueryKey);
        const previousTodos = queryClient.getQueryData<Ctx["previousTodos"]>(
          getTodoNodesQueryKey,
        );
        queryClient.setQueryData(
          getTodoNodesQueryKey,
          (old?: Ctx["previousTodos"]) => {
            return {
              ...old,
              node_todo: old?.node_todo.map((o) => o.id === it.id ? it : o) ||
                [],
            };
          },
        );
        return { previousTodos };
      },
      onError: (err, newTodo, context) => {
        queryClient.setQueryData(getTodoNodesQueryKey, context.previousTodos);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(getTodoNodesQueryKey);
      },
    },
  );
};
