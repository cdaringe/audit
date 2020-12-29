import type * as Types from "../../../api";

import type { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import gql from "graphql-tag";
export type UpdateTodoMutationVariables = Types.Exact<{
  assigned_group_id?: Types.Maybe<Types.Scalars["Int"]>;
  assigned_user_id?: Types.Maybe<Types.Scalars["Int"]>;
  full_text?: Types.Maybe<Types.Scalars["String"]>;
  id: Types.Scalars["Int"];
  is_complete?: Types.Maybe<Types.Scalars["Boolean"]>;
  is_virtual?: Types.Maybe<Types.Scalars["Boolean"]>;
  parent_id?: Types.Maybe<Types.Scalars["Int"]>;
  summary: Types.Scalars["String"];
}>;

export type UpdateTodoMutationResult = (
  & { readonly __typename?: "mutation_root" }
  & {
    readonly update_node_todo?: Types.Maybe<
      (
        & { readonly __typename?: "node_todo_mutation_response" }
        & Pick<Types.Node_Todo_Mutation_Response, "affected_rows">
      )
    >;
  }
);

export const UpdateTodoDocument = gql`
    mutation UpdateTodo($assigned_group_id: Int, $assigned_user_id: Int, $full_text: String, $id: Int!, $is_complete: Boolean, $is_virtual: Boolean, $parent_id: Int, $summary: String!) {
  update_node_todo(
    _set: {assigned_group_id: $assigned_group_id, assigned_user_id: $assigned_user_id, full_text: $full_text, id: $id, is_complete: $is_complete, is_virtual: $is_virtual, parent_id: $parent_id, summary: $summary}
    where: {id: {_eq: $id}}
  ) {
    affected_rows
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
    UpdateTodo(
      variables: UpdateTodoMutationVariables,
      requestHeaders?: Headers,
    ): Promise<UpdateTodoMutationResult> {
      return withWrapper(() =>
        client.request<UpdateTodoMutationResult>(
          print(UpdateTodoDocument),
          variables,
          requestHeaders,
        )
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
