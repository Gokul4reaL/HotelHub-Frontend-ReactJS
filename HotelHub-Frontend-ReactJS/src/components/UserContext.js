import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(""); // Initialize with an empty string

  const updateUserEmail = (email) => {
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userEmail, updateUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
