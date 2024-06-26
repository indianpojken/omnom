"use server";

import { eq } from "drizzle-orm";

import { database } from "@/services/database";
import { invites } from "@/schemas/invites";

import type { Invite, Roles } from "@/types";

export async function createInvite(role: Roles): Promise<Invite> {
  const [invite] = await database.insert(invites).values({ role }).returning();
  return invite;
}

export async function getInviteById(id: Invite["id"]): Promise<Invite> {
  const invite = await database.query.invites.findFirst({
    where: eq(invites.id, id),
  });

  if (invite) {
    return invite;
  } else {
    throw new Error(`Failed to get invite: no invite by id '${id}'.`);
  }
}

export async function deleteInviteById(id: Invite["id"]): Promise<Invite> {
  const [invite] = await database
    .delete(invites)
    .where(eq(invites.id, id))
    .returning();

  if (invite) {
    return invite;
  } else {
    throw new Error(`Failed to delete invite: no invite by id '${id}'.`);
  }
}

export async function getAllInvites() {
  return await database.query.invites.findMany();
}
