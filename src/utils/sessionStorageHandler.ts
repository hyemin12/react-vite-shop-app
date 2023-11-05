export const getDataToSessionStorage = (key: string) => {
  const storageData = sessionStorage.getItem(key);
  return storageData ? JSON.parse(storageData) : null;
};
export const saveDataToSessionStorage = (key: string, data: any) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};
export const deleteDataToSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
