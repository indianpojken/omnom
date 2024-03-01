import { useEffect, useState } from "react";

export function useInputMatcher() {
  const [matches, setMatches] = useState<Record<string, boolean>>({});
  const [isAllMatching, setIsAllMatching] = useState(false);

  const setMatch = (id: string, value: boolean) =>
    setMatches((prev) => ({ ...prev, [id]: value }));

  const isMatch = (id: string) => matches[id] ?? false;

  useEffect(() => {
    setIsAllMatching(Object.values(matches).every((value) => value === true));
  }, [matches]);

  return { setMatch, isMatch, isAllMatching };
}
