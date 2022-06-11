import { createContext } from "react";

export const storeContext = createContext(null);

export function StoreProvider({ children }) {
  const value = { name: "Hello World!" };
  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
}
