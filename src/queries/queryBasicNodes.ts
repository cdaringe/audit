import * as Types from '../api';

export type GetBasicNodesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBasicNodesQuery = (
  { __typename?: 'query_root' }
  & { nodes: Array<(
    { __typename?: 'nodes' }
    & Pick<Types.Nodes, 'id'>
  )> }
);
