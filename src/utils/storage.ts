export function getLocalItem<T>(key: string) {
  const jsonStr = localStorage.getItem(key);
  if (!jsonStr) return null;
  const value = JSON.parse(jsonStr) as T;
  return value;
}

export function setLocalItem<T>(key: string, value: T) {
  const jsonStr = JSON.stringify(value);
  localStorage.setItem(key, jsonStr);
}

export function removeLocalItem(key: string) {
  localStorage.removeItem(key);
}
