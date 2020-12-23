import { useQuery, QueryConfig, useMutation, MutationConfig } from 'react-query';

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
export type GetTodoNodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoNodesQueryResult = (
  { __typename?: 'query_root' }
  & { node_todo: Array<(
    { __typename?: 'node_todo' }
    & Pick<Node_Todo, 'id' | 'summary' | 'full_text' | 'assigned_user_id' | 'assigned_group_id' | 'is_complete'>
  )> }
);

export type UpdateTodoMutationVariables = Exact<{
  summary: Scalars['String'];
  id: Scalars['Int'];
  full_text?: Maybe<Scalars['String']>;
  assigned_user_id?: Maybe<Scalars['Int']>;
  assigned_group_id?: Maybe<Scalars['Int']>;
  is_complete?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateTodoMutationResult = (
  { __typename?: 'mutation_root' }
  & { update_node_todo?: Maybe<(
    { __typename?: 'node_todo_mutation_response' }
    & Pick<Node_Todo_Mutation_Response, 'affected_rows'>
  )> }
);


export const GetTodoNodesDocument = `
    query GetTodoNodes {
  node_todo(order_by: {id: asc}) {
    id
    summary
    full_text
    assigned_user_id
    assigned_group_id
    is_complete
  }
}
    `;
export const useGetTodoNodesQueryResult = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables?: GetTodoNodesQueryVariables, options?: QueryConfig<GetTodoNodesQueryResult>) => 
  useQuery<GetTodoNodesQueryResult>(
    ['GetTodoNodes', variables],
    fetcher<GetTodoNodesQueryResult, GetTodoNodesQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetTodoNodesDocument, variables),
    options
  );
export const UpdateTodoDocument = `
    mutation UpdateTodo($summary: String!, $id: Int!, $full_text: String, $assigned_user_id: Int, $assigned_group_id: Int, $is_complete: Boolean) {
  update_node_todo(
    _set: {summary: $summary, id: $id, full_text: $full_text, assigned_user_id: $assigned_user_id, assigned_group_id: $assigned_group_id, is_complete: $is_complete}
    where: {id: {_eq: $id}}
  ) {
    affected_rows
  }
}
    `;
export const useUpdateTodoMutationResult = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables: UpdateTodoMutationVariables, options?: MutationConfig<UpdateTodoMutationResult, unknown, UpdateTodoMutationVariables>) => 
  useMutation<UpdateTodoMutationResult, unknown, UpdateTodoMutationVariables>(
    fetcher<UpdateTodoMutationResult, UpdateTodoMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateTodoDocument, variables),
    options
  );