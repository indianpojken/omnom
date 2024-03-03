export default function Button({
  children,
  ...props
}: React.ComponentProps<"button"> & {
  children: React.ReactNode;
}) {
  return (
    <button
      {...props}
      className={`${props.className} text-xl enabled:hover:scale-[115%] transition-transform text-amber-900 border-b-amber-900 border-b-2 bg-amber-100 p-2 rounded-md disabled:bg-zinc-100 disabled:text-zinc-400 disabled:border-b-zinc-300`}
    >
      {children}
    </button>
  );
}
