import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

type Db = ReturnType<typeof drizzle<typeof schema>>;

let _db: Db | null = null;

function getDb(): Db {
  if (_db) return _db;
  const url = process.env.DATABASE_PUBLIC_URL;
  if (!url) throw new Error("DATABASE_PUBLIC_URL is not set");
  const client = postgres(url, {
    max: 3,
    connect_timeout: 10,
    idle_timeout: 20,
    ssl: "require",
  });
  _db = drizzle(client, { schema });
  return _db;
}

export const db: Db = new Proxy({} as Db, {
  get(_target, prop: string) {
    return getDb()[prop as keyof Db];
  },
});
