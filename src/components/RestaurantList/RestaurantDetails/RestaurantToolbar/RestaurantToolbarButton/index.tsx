import Link from "next/link";
import { MotionArticle } from "@/components/Motion";

export default function RestaurantToolbarButton({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <MotionArticle
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className="transition-colors text-amber-900 hover:text-amber-100 bg-amber-100 hover:bg-amber-950 p-2 rounded-md"
    >
      <Link href={href}>{icon}</Link>
    </MotionArticle>
  );
}
