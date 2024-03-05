import Link from "next/link";

import Button from "@/components/Button";

export default function LetterNavigator<T extends string>({
  data,
  comparativeData,
}: {
  data: T[];
  comparativeData: T[];
}) {
  const letterize = (items: T[]) =>
    Array.from(new Set(items.map((item) => item.at(0)?.toUpperCase())));

  const letterizedData = letterize(data);

  return (
    <ol className="flex max-w-fit flex-wrap gap-4">
      {letterize(comparativeData).map((letter) => (
        <li key={letter}>
          <Link href={`#${letter}`}>
            <Button
              disabled={!letterizedData.includes(letter)}
              className="w-10"
            >
              {letter}
            </Button>
          </Link>
        </li>
      ))}
    </ol>
  );
}
