import Header from "@/components/Header";
import { MotionArticle } from "@/components/Motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MotionArticle initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Header />
      </MotionArticle>

      <main>{children}</main>
    </>
  );
}
