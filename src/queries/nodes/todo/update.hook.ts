const query = `
mutation UpdateTodo(
  $summary: String!,
  $id: Int!,
  $full_text: String,
  $assigned_user_id: Int,
  $assigned_group_id: Int,
  $is_complete: Boolean
) {
  update_node_todo(_set: {
    summary: $summary,
    id: $id,
    full_text: $full_text,
    assigned_user_id: $assigned_user_id,
    assigned_group_id: $assigned_group_id,
    is_complete: $is_complete
  },
    where: {id: {_eq: $id}}) {
    affected_rows
  }
}

`;

import { useQueryClient } from "react-query";
import { createUseMutation } from "../../../hooks/createUseQuery";
import type {
  UpdateTodoMutationResult,
  UpdateTodoMutationVariables,
} from "./updateTodoNode.gen";

export const useMutateTodo = () => {
  // const queryClient = useQueryClient();
  return createUseMutation<
    UpdateTodoMutationResult,
    UpdateTodoMutationVariables
  >(
    query,
    {
      onSuccess: () => {
        // queryClient.invalidateQueries("todos");
      },
    },
  );
};
