import { useQuery, UseQueryOptions } from "react-query";
import { useClient } from "../../../contexts/gql-client";
import { GetTodoNodeQueryResult } from "./queryTodoNode.gen";
import { getSdk } from "./queryTodoNodes.gen";

export const queryKey = "todos";

export const useQueryNodes = (
  id: number,
  options?: UseQueryOptions<unknown, unknown, GetTodoNodeQueryResult>,
) => {
  const client = useClient();
  return useQuery<unknown, unknown, GetTodoNodeQueryResult>({
    ...(options || {}),
    queryKey,
    queryFn: () => getSdk(client).GetTodoNodes({ id }),
  });
};
