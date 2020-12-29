import type * as Types from "../../../api";

import type { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import gql from "graphql-tag";
export type TodoNodeFragment = (
  & { readonly __typename?: "node_todo" }
  & Pick<
    Types.Node_Todo,
    | "assigned_group_id"
    | "assigned_user_id"
    | "full_text"
    | "id"
    | "is_complete"
    | "is_virtual"
    | "parent_id"
    | "summary"
  >
);

export const TodoNodeFragmentDoc = gql`
    fragment TodoNode on node_todo {
  assigned_group_id
  assigned_user_id
  full_text
  id
  is_complete
  is_virtual
  parent_id
  summary
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {};
}
export type Sdk = ReturnType<typeof getSdk>;
