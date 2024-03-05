export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex mx-auto min-h-screen flex-col px-12 py-10 max-w-[800px]">
      {children}
    </main>
  );
}
