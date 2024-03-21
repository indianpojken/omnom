import Logo from "./Logo";
import BackButton from "./BackButton";

export default function Header({ redirection }: { redirection?: string }) {
  return (
    <header className="flex justify-between">
      <Logo />

      {redirection && (
        <aside className="mt-3 ml-4 sm:hidden">
          <BackButton redirection={redirection} />
        </aside>
      )}
    </header>
  );
}
