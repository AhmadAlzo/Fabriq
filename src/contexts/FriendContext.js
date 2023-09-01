import React, { createContext, useState, useContext } from 'react';
// import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
    {
        name:"asasdsad",
        mode:"inner"
    }
]

const AuthContext = createContext();

export const FriendContext = ({ children }) => {
  const [fiend, setfiend] = useState(null);
  return (
    <AuthContext.Provider
      value={[fiend,setfiend]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useFriendContext() {
  const context = useContext(AuthContext);
  return context;
}


