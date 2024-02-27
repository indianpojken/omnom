import { pgEnum } from "drizzle-orm/pg-core";

import { roles } from "@/globals";

export const role = pgEnum("role", roles);
