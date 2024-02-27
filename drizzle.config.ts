import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default {
  schema: "./src/schemas/*",
  out: "./.drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE!,
  },
} satisfies Config;
