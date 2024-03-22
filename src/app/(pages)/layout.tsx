import Header from "@/components/Header";
import { MotionArticle } from "@/components/Motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}
