import { pgEnum } from "drizzle-orm/pg-core";

import { roles } from "@/constants";

export const role = pgEnum("role", roles);
