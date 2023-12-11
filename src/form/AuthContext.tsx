import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextData {
  userData: UserData;
  updateUserData: (id: string, password: string) => void;
}

interface UserData {
  id: string;
  password: string;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>({ id: "", password: "" });

  const updateUserData = (id: string, password: string) => {
    setUserData({ id, password });
  };

  return (
    <AuthContext.Provider value={{ userData, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export { AuthContextProvider, useAuth };
