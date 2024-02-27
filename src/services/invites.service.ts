import { eq } from "drizzle-orm";

import { database } from "@/services/database.service";
import { invites } from "@/schemas/invites.schema";

import type { Invite, Roles } from "@/types";

async function createInvite(role: Roles) {
  const [invite] = await database.insert(invites).values({ role }).returning();
  return invite;
}

async function getInviteById(id: Invite["id"]) {
  const invite = await database.query.invites.findFirst({
    where: eq(invites.id, id),
  });

  if (invite) {
    return invite;
  } else {
    throw Error(`Failed to get invite: no invite by id '${id}'.`);
  }
}

async function deleteInviteById(id: Invite["id"]): Promise<Invite | undefined> {
  const [invite] = await database
    .delete(invites)
    .where(eq(invites.id, id))
    .returning();

  if (invite) {
    return invite;
  } else {
    throw Error(`Failed to delete invite: no invite by id '${id}'.`);
  }
}
