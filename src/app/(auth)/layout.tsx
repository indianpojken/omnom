export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
