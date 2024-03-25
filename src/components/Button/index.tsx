"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  ...props
}: React.ComponentProps<(typeof motion)["button"]> & {
  children: React.ReactNode;
}) {
  return (
    <motion.button
      {...props}
      className={`${props.className} text-xl enabled:hover:scale-[115%] transition-all bg-amber-100 hover:bg-amber-800 text-amber-900 hover:text-amber-200 border-b-amber-900 hover:border-b-amber-950 border-b-2  p-2 rounded-md disabled:bg-zinc-100 disabled:text-zinc-400 disabled:border-b-zinc-300`}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}
