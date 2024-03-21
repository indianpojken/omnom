"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/Icons";
import Link from "next/link";

export default function BackButton({ redirection }: { redirection: string }) {
  return (
    <Link href={redirection}>
      <motion.span
        className="flex p-2 rounded-md transition-colors bg-amber-100 text-amber-900 hover:bg-amber-950 hover:text-amber-100"
        // initial={{ scale: 0, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {Icons["back"]}
      </motion.span>
    </Link>
  );
}
