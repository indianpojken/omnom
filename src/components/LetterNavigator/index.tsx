import Link from "next/link";

import Button from "@/components/Button";

export default function LetterNavigator<T extends string>({
  data,
}: {
  data: T[];
}) {
  const letterize = Array.from(
    new Set(data.map((item) => item.at(0)?.toUpperCase()))
  );

  return (
    <ol className="flex max-w-fit flex-wrap gap-4">
      {letterize.map((letter) => (
        <li key={letter}>
          <Link href={`#${letter}`}>
            <Button disabled={letter === "B"} className="w-10">
              {letter}
            </Button>
          </Link>
        </li>
      ))}
    </ol>
  );
}
