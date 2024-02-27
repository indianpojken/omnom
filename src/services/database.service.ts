import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// import * as x from '../schemas/x.schema.ts';

const connectionString = process.env.DATABASE as string;
const client = postgres(connectionString);

// export const database = drizzle(client, { schema: { ...x } });
