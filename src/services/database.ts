import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as invites from "@/schemas/invites";
import * as restaurants from "@/schemas/restaurants";
import * as menus from "@/schemas/menus";

const client = postgres(process.env.DATABASE!, { prepare: false });
export const database = drizzle(client, {
  schema: { ...invites, ...restaurants, ...menus },
});
