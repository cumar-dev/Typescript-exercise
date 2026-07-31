import { useEffect, useState } from "react";

function useNumberLocalStorage(
  key: string,
  initialValue: number
): [number, (value: number) => void] {
  const [value, setValue] = useState<number>(() => {
    const stored = localStorage.getItem(key);
    return stored ? Number(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value.toString());
  }, [key, value]);

  return [value, setValue];
}

export default useNumberLocalStorage;