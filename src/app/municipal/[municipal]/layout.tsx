import Logo from "@/components/Logo/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex mx-auto min-h-screen flex-col px-6 py-10 max-w-[800px]">
      <header>
        <Logo />
      </header>

      {children}
    </main>
  );
}
