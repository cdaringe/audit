import { useQuery, QueryConfig } from 'react-query';

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
export type GetBasicNodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBasicNodesQueryResult = (
  { __typename?: 'query_root' }
  & { nodes: Array<(
    { __typename?: 'nodes' }
    & Pick<Nodes, 'id'>
  )> }
);


export const GetBasicNodesDocument = `
    query GetBasicNodes {
  nodes(where: {node_type: {_eq: 1}}) {
    id
  }
}
    `;
export const useGetBasicNodesQueryResult = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables?: GetBasicNodesQueryVariables, options?: QueryConfig<GetBasicNodesQueryResult>) => 
  useQuery<GetBasicNodesQueryResult>(
    ['GetBasicNodes', variables],
    fetcher<GetBasicNodesQueryResult, GetBasicNodesQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetBasicNodesDocument, variables),
    options
  );