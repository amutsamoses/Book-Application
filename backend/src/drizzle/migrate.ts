import "dotenv/config";

import { migrate } from "drizzle-orm/node-postgres/migrator";

import db, { client } from "./db";
import { error } from "console";

async function migration() {
  console.log("Running migration...");

  await migrate(db, {
    migrationsFolder: __dirname + "/migrations",
  });

  await client.end();

  console.log("==================Migration complete!=====================");

  process.exit(0);
}

migration().catch((err) => {
  console.error(err);
  process.exit(0);
});
