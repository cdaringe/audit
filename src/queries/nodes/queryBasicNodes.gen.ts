import type * as Types from '../../api';

export type GetBasicNodesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBasicNodesQueryResult = (
  { readonly __typename?: 'query_root' }
  & { readonly nodes: ReadonlyArray<(
    { readonly __typename?: 'nodes' }
    & Pick<Types.Nodes, 'id'>
  )> }
);
