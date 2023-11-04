export const getDataToSessionStorage = (key) => {
  const storageData = sessionStorage.getItem(key);
  return storageData ? JSON.parse(storageData) : null;
};
export const saveDataToSessionStorage = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};
export const deleteDataToSessionStorage = (key) => {
  sessionStorage.removeItem(key);
};
