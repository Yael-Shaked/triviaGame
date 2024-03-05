import React from "react";
import { rootStore, IRootStore } from "./RootStore";
import { createContext, useContext } from "react";
import { Instance } from "mobx-state-tree";

export const StoreContext = createContext<IRootStore | null>(null);
export const RootStoreProvider = StoreContext.Provider;

export const useRootStore = () => {
  const store = useContext(StoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
};

export default StoreContext;
