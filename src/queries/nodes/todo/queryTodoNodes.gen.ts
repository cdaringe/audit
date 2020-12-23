import type * as Types from "../../../api";

export type GetTodoNodesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetTodoNodesQueryResult = (
  & { readonly __typename?: "query_root" }
  & {
    readonly node_todo: ReadonlyArray<
      (
        & { readonly __typename?: "node_todo" }
        & Pick<
          Types.Node_Todo,
          | "id"
          | "summary"
          | "full_text"
          | "assigned_user_id"
          | "assigned_group_id"
          | "is_complete"
        >
      )
    >;
  }
);
