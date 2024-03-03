import { invites } from "@/schemas/invites";
import { roles } from "@/constants";

export type Invite = typeof invites.$inferSelect;
export type Roles = (typeof roles)[number];

export type Municipal = string;
export type Municipalities = Municipal[];
