import { createContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, updateUser] = useState(null);

  const registerUser = async (info) => {
    try {
      const response = await axios.post('http://localhost:3001/users', info);
      updateUser(response.data);
      toast.success("Registration completed");
    } catch {
      toast.error("Registration failed");
    }
  };

  const loginUser = async (info) => {
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: {
          username: info.username,
          password: info.password
        }
      });

      if (response.data.length > 0) {
        updateUser(response.data[0]);
        toast.success("Login successful");
      } else {
        toast.error("User not found");
      }
    } catch {
      toast.error("Login error");
    }
  };

  const logoutUser = () => {
    updateUser(null);
    toast.info("Logged out");
  };

  return (
    <AuthContext.Provider value={{ currentUser, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
