import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as invites from "@/schemas/invites.schema";

const client = postgres(process.env.DATABASE!);

export const database = drizzle(client, { schema: { ...invites } });
