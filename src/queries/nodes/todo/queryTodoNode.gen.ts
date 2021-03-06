import type * as Types from "../../../api";

import type { TodoNodeFragment } from "./TodoNode.gen";
import type { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import gql from "graphql-tag";
import { TodoNodeFragmentDoc } from "./TodoNode.gen";
export type GetTodoNodeQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type GetTodoNodeQueryResult = (
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

export const GetTodoNodeDocument = gql`
    query GetTodoNode($id: Int!) {
  node_todo(where: {id: {_eq: $id}}) {
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
    GetTodoNode(
      variables: GetTodoNodeQueryVariables,
      requestHeaders?: Headers,
    ): Promise<GetTodoNodeQueryResult> {
      return withWrapper(() =>
        client.request<GetTodoNodeQueryResult>(
          print(GetTodoNodeDocument),
          variables,
          requestHeaders,
        )
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
