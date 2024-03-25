import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

import { role } from "./shared";

export const invites = pgTable("invites", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  role: role("role"),
  createdAt: timestamp("createAt", { withTimezone: true }).defaultNow(),
});
