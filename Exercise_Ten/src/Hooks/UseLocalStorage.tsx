import { useEffect, useState } from "react";

function useLocalStorage<T>(
  key: string,
  initailValue: T,
): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initailValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
