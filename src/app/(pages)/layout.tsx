export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-full flex mx-auto flex-col px-6 py-10 max-w-[800px]">
      {children}
    </main>
  );
}
