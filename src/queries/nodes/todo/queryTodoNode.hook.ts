import { useQuery, UseQueryOptions } from "react-query";
import { useClient } from "../../../contexts/gql-client";
import { getSdk } from "./queryTodoNode.gen";

export const useQueryTodoNode = (id: number) => {
  const client = useClient();
  return useQuery({
    queryFn: () => getSdk(client).GetTodoNode({ id }),
    queryKey: ["todos", id],
  });
};
