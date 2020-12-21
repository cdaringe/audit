import type { Tasks } from "https://deno.land/x/rad/src/mod.ts";

// order matters. env effectful writes may occur in task creators
import format from "./.rad/format.ts";
import * as db from "./.rad/db.ts";
import * as services from "./.rad/services.ts";

export const tasks: Tasks = {
  ...db,
  ...format,
  ...services,
  gql: `yarn graphql-codegen`,
  gqlw: `yarn graphql-codegen --watch`,
};
