import { useContext } from "react";
import { storeContext } from "@src/context";

export const useStore = () => useContext(storeContext);
