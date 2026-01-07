import { useState, createContext, type ReactNode } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
}

export const userContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = userContext.Provider;

const UserDetailsContext = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState("");
  console.log("usernmae", userName);
  return (
    <UserProvider value={{ userName, setUserName }}>{children}</UserProvider>
  );
};
export default UserDetailsContext;
