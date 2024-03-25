import { motion, AnimatePresence } from "framer-motion";

export default function Notification({ message }: { message?: string | null }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.article
          className="text-red-800 bg-red-100 p-4 text-center rounded-md break-keep"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
        >
          {message.split("\n").map((sentences, index) => (
            <p key={index}>{sentences}</p>
          ))}
        </motion.article>
      )}
    </AnimatePresence>
  );
}
