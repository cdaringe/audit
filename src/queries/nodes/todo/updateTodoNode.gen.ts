import type * as Types from "../../../api";

export type UpdateTodoMutationVariables = Types.Exact<{
  summary: Types.Scalars["String"];
  id: Types.Scalars["Int"];
  full_text?: Types.Maybe<Types.Scalars["String"]>;
  assigned_user_id?: Types.Maybe<Types.Scalars["Int"]>;
  assigned_group_id?: Types.Maybe<Types.Scalars["Int"]>;
  is_complete?: Types.Maybe<Types.Scalars["Boolean"]>;
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
