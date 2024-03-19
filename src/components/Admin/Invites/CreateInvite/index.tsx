"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/Icons";
import { createInviteAction } from "@/actions/invites";

export default function CreateInvite() {
  return (
    <motion.button
      type="button"
      onClick={() => createInviteAction()}
      whileTap={{ scale: 0.9 }}
      className="flex justify-center p-2 transition-colors text-green-50 items-center min-w-12 bg-emerald-500 border-b-2 border-emerald-900 hover:bg-emerald-700 rounded-md"
    >
      {Icons["add"]}
    </motion.button>
  );
}
