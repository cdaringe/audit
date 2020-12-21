import { createUseQuery } from "src/hooks/createUseQuery"
import type { GetBasicNodesQueryResult, GetBasicNodesQueryVariables } from "./queryBasicNodes.gen";
const q = createUseQuery(`query GetBasicNodes {
  nodes(where: {node_type: {_eq: 1}}) {
    id
  }
}`)

export const useQueryBasicNodes = () => q<GetBasicNodesQueryResult, unknown, GetBasicNodesQueryVariables>({})
