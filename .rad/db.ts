import type { Task } from "https://deno.land/x/rad/src/mod.ts";

const sqlDumpFilename = "db/dump.sql";
const POSTGRES_DB = "postgres";
Deno.env.set("PGPASSWORD", "postgrespassword");
Deno.env.set("POSTGRES_DB", POSTGRES_DB);
const psqlConnArgs = " -U postgres -h 127.0.0.1 ";
export const psql = `psql ${psqlConnArgs}`;
export const dump: Task =
  `pg_dump -O -x  --schema public ${psqlConnArgs} > ${sqlDumpFilename}`;
export const dbd = dump;
export const restore: Task = {
  async fn({ sh, logger }) {
    const dbDirname = Deno.cwd() + "/.db/";
    Deno.remove(dbDirname, { recursive: true }).catch(() => {
      logger.warning(`failed to rm .db (${dbDirname})`);
    });
    const cmds = [
      `psql ${psqlConnArgs} ${POSTGRES_DB} < ${sqlDumpFilename}`,
    ];
    for (const cmd of cmds) {
      logger.info(cmd);
      await sh(cmd);
    }
  },
};
export const dbr = restore;
