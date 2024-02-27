import { invites } from "@/schemas/invites.schema";
import { roles } from "./globals";

export type Invite = typeof invites.$inferSelect;
export type Roles = (typeof roles)[number];
