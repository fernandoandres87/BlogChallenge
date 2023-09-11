export const useLocalStorage = () => {
  const setLocalStorage = (key: string, value: string) =>
    localStorage.setItem(key, value);

  const getLocalStorage = (key: string) => localStorage.getItem(key);

  const removeLocalStorage = (key: string) => localStorage.removeItem(key);

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
  };
};
