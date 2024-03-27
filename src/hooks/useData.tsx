import { useEffect, useState, useTransition } from "react";
import type { DependencyList } from "react";

export function useData<T>(
  callback: () => Promise<T>,
  dependencies?: DependencyList
): { data: T | null; isPending: boolean } {
  const [data, setData] = useState<T | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetcher = async () => {
      const fetchedData = await callback();
      setData(fetchedData);
    };

    startTransition(() => fetcher());
  }, dependencies);

  return { data, isPending };
}
