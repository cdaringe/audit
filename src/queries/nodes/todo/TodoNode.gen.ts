import type * as Types from "../../../api";

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
