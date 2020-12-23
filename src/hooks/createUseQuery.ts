import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables,
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    if (json.errors) {
      const { message } = json.errors[0];
      throw new Error(message);
    }
    return json.data;
  };
}

export const createUseQuery = <Result, Vars = {}>(
  query: string,
  options: UseQueryOptions<Result>,
  vars?: Vars,
) =>
  useQuery({
    queryFn: () => {
      return fetcher<Result, Vars>("/api/graphql", {}, query, vars)();
    },
    ...options,
  });

export const createUseMutation = <Result, Vars = {}>(
  query: string,
  options?: UseMutationOptions<Result, unknown, Vars, unknown>,
) => {
  let fn: MutationFunction<Result, Vars> = (vars) =>
    fetcher<Result, Vars>("/api/graphql", {}, query, vars)();
  return useMutation<Result, unknown, Vars>(
    fn,
    options,
  );
};
