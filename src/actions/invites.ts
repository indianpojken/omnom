"use server";

import { revalidatePath } from "next/cache";

import { createInvite, deleteInviteById } from "@/services/invites";
import { Invite } from "@/types";
import { isAdmin } from "@/utils/user";

export async function createInviteAction(): Promise<void> {
  if (await isAdmin()) {
    await createInvite("user");
    revalidatePath("/manage");
  } else {
    throw new Error(`Ajabaja, det där får inte du göra!`);
  }
}

export async function removeInviteAction(id: Invite["id"]): Promise<void> {
  if (await isAdmin()) {
    await deleteInviteById(id);
    revalidatePath("/manage");
  } else {
    throw new Error(`Ajabaja, det där får inte du göra!`);
  }
}
