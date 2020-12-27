import { createUseQuery } from "../../../hooks/createUseQuery";
import type {
  GetTodoNodesQueryResult,
  GetTodoNodesQueryVariables,
} from "./queryTodoNodes.gen";

const query = `query GetTodoNodes {
  node_todo(order_by: { id: asc }) {
    id
    summary
    full_text
    assigned_user_id
    assigned_group_id
    is_complete
  }
}

`;

export const useQueryTodoNodes = () =>
  createUseQuery<GetTodoNodesQueryResult, GetTodoNodesQueryVariables>(
    query,
    {
      queryKey: ["todos"],
    },
  );
