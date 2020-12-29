import type * as Types from "../../../api";

import type { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import gql from "graphql-tag";
export type GetMyStreamNodesQueryVariables = Types.Exact<
  { [key: string]: never }
>;

export type GetMyStreamNodesQueryResult = (
  & { readonly __typename?: "query_root" }
  & {
    readonly node_todo: ReadonlyArray<
      (
        & { readonly __typename?: "node_todo" }
        & Pick<Types.Node_Todo, "summary" | "is_complete" | "id">
      )
    >;
  }
);

export const GetMyStreamNodesDocument = gql`
    query GetMyStreamNodes {
  node_todo(order_by: {id: asc}, where: {parent_id: {_is_null: true}}) {
    summary
    is_complete
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetMyStreamNodes(
      variables?: GetMyStreamNodesQueryVariables,
      requestHeaders?: Headers,
    ): Promise<GetMyStreamNodesQueryResult> {
      return withWrapper(() =>
        client.request<GetMyStreamNodesQueryResult>(
          print(GetMyStreamNodesDocument),
          variables,
          requestHeaders,
        )
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
