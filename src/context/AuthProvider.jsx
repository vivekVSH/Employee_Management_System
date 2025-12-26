import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    // localStorage.clear()
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    // localStorage stores an array where the first item contains an `employees` array.
    // Normalize so `userData` is always an array of employee objects.
    const normalized = (employees && employees.length && employees[0].employees) || [];
    setUserData(normalized);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
