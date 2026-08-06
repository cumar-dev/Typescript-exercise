import { useEffect, useState } from "react";

interface User {
  language: string;
  notifications: boolean;
}

function useSettingStorage(
  key: string,
  initialValue: User,
): [User, (value: User) => void] {
  const [value, setValue] = useState<User>(() => {
    const stored = localStorage.getItem(key);

    if (!stored) {
      return initialValue;
    }

    try {
      return JSON.parse(stored) as User;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useSettingStorage;
