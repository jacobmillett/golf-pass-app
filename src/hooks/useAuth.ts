import { useState } from 'react';
import { User } from '../types/types';

let currentUser: User | null = null;

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(currentUser);

  const login = (userData: User) => {
    currentUser = userData;
    setUser(userData);
  };

  const logout = () => {
    currentUser = null;
    setUser(null);
  };

  return { user, login, logout };
};