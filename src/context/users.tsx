"use client";

import React, { createContext, useState } from "react";

type UsersContextType = {
  users: string[];
  setUsers: (users: string[]) => void;
  addUser: (name: string) => void;
  removeUser: (name: string) => void;
};

const UsersContext = createContext({
  users: [],
  setUsers: (users: string[]) => {},
  addUser: (name: string) => {},
  removeUser: (name: string) => {},
} as UsersContextType);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<string[]>([]);

  const addUser = (name: string) => {
    setUsers([...users, name]);
  };

  const removeUser = (name: string) => {
    setUsers(users.filter((user) => user !== name));
  };

  const value = {
    users,
    setUsers,
    addUser,
    removeUser,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
