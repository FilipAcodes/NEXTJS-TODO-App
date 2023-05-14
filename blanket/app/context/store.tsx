"use client";

import { createContext, useContext, useState } from "react";

export interface UserContextValue {
  tasks: string;
  setTasks: React.Dispatch<React.SetStateAction<string>>;
}

export const TheUserContext = createContext<UserContextValue>({
  tasks: "",
  setTasks: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState("");
  const contextValue = { tasks, setTasks };

  return (
    <TheUserContext.Provider value={contextValue}>
      {children}
    </TheUserContext.Provider>
  );
};

export const useGlobalContext = () => useContext(TheUserContext);
