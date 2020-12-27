import { createUseQuery } from "../../../hooks/createUseQuery";
import type {
  GetTodoNodeQueryResult,
  GetTodoNodeQueryVariables,
} from "./queryTodoNode.gen";

const query = `query GetTodoNode($id:Int!) {
  node_todo(where: { id: { _eq: $id }}) {
    id
    summary
    full_text
    assigned_user_id
    assigned_group_id
    is_complete
  }
}
`;

export const useQueryTodoNode = (id: number) =>
  createUseQuery<GetTodoNodeQueryResult, GetTodoNodeQueryVariables>(
    query,
    {
      queryKey: ["todos", id],
    },
    {
      id,
    },
  );
