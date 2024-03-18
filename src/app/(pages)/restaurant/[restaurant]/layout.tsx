import Logo from "@/components/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Logo />
      </header>

      {children}
    </>
  );
}
