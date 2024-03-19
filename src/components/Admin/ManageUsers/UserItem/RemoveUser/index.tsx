"use client";

import type { User } from "@supabase/supabase-js";

import { Icons } from "@/components/Icons";
import { removeUserAction } from "@/actions/users";

export default function RemoveUser({ user }: { user: User }) {
  return (
    <button
      onClick={() => removeUserAction(user)}
      className="transition-colors text-amber-900 hover:text-amber-600 rounded-md"
    >
      {Icons["removeUser"]}
    </button>
  );
}
