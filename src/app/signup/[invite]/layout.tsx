export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-zinc-200 min-h-screen flex items-center justify-center">
      {children}
    </section>
  );
}
