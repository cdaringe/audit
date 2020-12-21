import { useQuery, QueryConfig, UseQueryOptions } from 'react-query';

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    if (json.errors) {
      const { message } = json.errors[0];
      throw new Error(message);
    }
    return json.data;
  }
}

export const createUseQuery = (query: string) => <Result, Err=unknown, Vars={}>(options: UseQueryOptions<Result>, vars?: Vars) => {
    return useQuery({
      queryFn: () => {
        return fetcher<Result, Vars>("http://abc", {}, query, vars)()
      },
      ...options
    })
}
