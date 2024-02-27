import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as invites from "@/schemas/invites";

const client = postgres(process.env.DATABASE!, { prepare: false });
export const database = drizzle(client, { schema: { ...invites } });
