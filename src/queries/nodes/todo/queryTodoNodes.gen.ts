import type * as Types from "../../../api";

import type { TodoNodeFragment } from "./TodoNode.gen";
import type { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import gql from "graphql-tag";
import { TodoNodeFragmentDoc } from "./TodoNode.gen";
export type GetTodoNodesQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type GetTodoNodesQueryResult = (
  & { readonly __typename?: "query_root" }
  & {
    readonly node_todo: ReadonlyArray<
      (
        & { readonly __typename?: "node_todo" }
        & TodoNodeFragment
      )
    >;
  }
);

export const GetTodoNodesDocument = gql`
    query GetTodoNodes($id: Int!) {
  node_todo(
    order_by: {id: asc}
    where: {_or: [{id: {_eq: $id}}, {parent_id: {_eq: $id}}]}
  ) {
    ...TodoNode
  }
}
    ${TodoNodeFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetTodoNodes(
      variables: GetTodoNodesQueryVariables,
      requestHeaders?: Headers,
    ): Promise<GetTodoNodesQueryResult> {
      return withWrapper(() =>
        client.request<GetTodoNodesQueryResult>(
          print(GetTodoNodesDocument),
          variables,
          requestHeaders,
        )
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
