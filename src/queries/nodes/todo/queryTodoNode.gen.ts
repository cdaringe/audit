import type * as Types from "../../../api";

import type { TodoNodeFragment } from "./TodoNode.gen";
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
