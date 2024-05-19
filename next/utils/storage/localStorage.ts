// @ts-nocheck
const prefix = "REACT_APP_MERCHANT-";

const LocalStorage = {
  setItem: (key: string, value: string) => {
    if (typeof window !== "undefined") {
      return localStorage.setItem(`${prefix}${key}`, value.toString());
    }
  },

  getItem: (key: string): string | null => {
    if (!key) {
      return null;
    } else {
      if (typeof window !== "undefined") {
        const items = localStorage.getItem(`${prefix}${key}`);
        if (!items) {
          return null;
        }
        return items;
      }
    }
  },

  removeItem: (key: string) => {
    if (typeof window !== "undefined") {
      return localStorage.removeItem(`${prefix}${key}`);
    }
  },

  clearAll: () => {
    const keys: string[] = Object.keys(localStorage);

    if (keys.length > 0) {
      keys.map((key) => {
        if (typeof window !== "undefined") {
          localStorage.removeItem(key);
        }
      });
    }
  },

  getAll: () => {
    const keys: string[] = Object.keys(localStorage);

    if (keys.length > 0) {
      return keys.map((key) => {
        if (typeof window !== "undefined") {
          return localStorage.getItem(key);
        }
      });
    }
  },
};

export default LocalStorage;

export const tokenType = {
  AUTH: "AUTH",
};
