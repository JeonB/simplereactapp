import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextData {
  userData: UserData;
  loginData: LoginData;
  updateUserData: (
    id: string,
    password: string,
    name: string,
    phonenum: string
  ) => void;
  updateLoginData: (id: string, password: string) => void;
  clearUserData: () => void;
  clearLoginData: () => void;
}

interface UserData {
  id: string;
  password: string;
  name: string;
  phonenum: string;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface LoginData {
  id: string;
  password: string;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>({
    id: "",
    password: "",
    name: "",
    phonenum: "",
  });

  const updateUserData = (
    id: string,
    password: string,
    name: string,
    phonenum: string
  ) => {
    setUserData({
      id,
      password,
      name,
      phonenum,
    });
  };

  const [loginData, setLoginData] = useState<LoginData>({
    id: "",
    password: "",
  });

  const updateLoginData = (id: string, password: string) => {
    setLoginData({
      id,
      password,
    });
  };

  const clearUserData = () => {
    setUserData({
      id: "",
      password: "",
      name: "",
      phonenum: "",
    });
  };

  const clearLoginData = () => {
    setLoginData({
      id: "",
      password: "",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        updateUserData,
        loginData,
        updateLoginData,
        clearUserData,
        clearLoginData,
      }}
    >
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
