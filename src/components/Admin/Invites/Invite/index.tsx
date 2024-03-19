"use client";

import { useState } from "react";
import Link from "next/link";

import { Icons } from "@/components/Icons";
import { removeInviteAction } from "@/actions/invites";
import { Invite } from "@/types";
import { MotionAside, MotionButton } from "@/components/Motion";

export default function Invite({ invite }: { invite: Invite }) {
  const [hoverRemove, setHoverRemove] = useState(false);

  return (
    <section className="flex-1 flex flex-row flex-wrap justify-between gap-2">
      <Link
        href={`/signup/${invite.id}`}
        className={
          "flex gap-2 transition-colors flex-row flex-1 bg-amber-100 rounded-md p-2 hover:text-amber-100 hover:bg-amber-950 " +
          (hoverRemove ? "text-amber-100 bg-amber-950" : "text-amber-950")
        }
      >
        {Icons["url"]}
        <p className="font-mono uppercase">{invite.id}</p>
      </Link>

      <MotionButton
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => removeInviteAction(invite.id)}
        onMouseEnter={() => setHoverRemove(true)}
        onMouseLeave={() => setHoverRemove(false)}
        className="flex flex-1 justify-center transition-colors text-amber-900 bg-amber-100 hover:text-amber-100 hover:bg-amber-950 p-2 rounded-md"
      >
        {Icons["removeSolid"]}
      </MotionButton>
    </section>
  );
}
