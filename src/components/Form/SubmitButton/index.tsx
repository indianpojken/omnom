"use client";

import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

import Spinner from "./Spinner";

export default function SubmitButton({
  children,
  disabled,
  className,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      disabled={disabled || pending}
      aria-disabled={pending}
      className={`flex-1 font-bold text-xl transition-all bg-amber-100 hover:bg-amber-800 text-amber-900 hover:text-amber-200 border-b-amber-900 hover:border-b-amber-950 border-b-2  p-2 rounded-md disabled:bg-zinc-100 disabled:text-zinc-400 disabled:border-b-zinc-300 ${className}`}
    >
      {!pending ? children : <Spinner />}
    </motion.button>
  );
}
