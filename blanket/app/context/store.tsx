"use client";

import { createContext, useContext, useState } from "react";

export interface Task {
  id: number;
  task: string;
}

export interface UserContextValue {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TheUserContext = createContext<UserContextValue>({
  tasks: [],
  setTasks: () => {},
});

export const GlobalContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const contextValue = { tasks, setTasks };

  return (
    <TheUserContext.Provider value={contextValue}>
      {children}
    </TheUserContext.Provider>
  );
};

export const useGlobalContext = () => useContext(TheUserContext);
