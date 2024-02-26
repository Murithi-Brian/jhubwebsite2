import { createContext, useState, ReactNode, useContext } from 'react';

/**
 *
 * REVIEWS, FAVORITES
 * CONTENT CHOICE TO CACHE
 * THEME
 * SETTINGS
 * POINTS OF INTERESTS AND MORE
 */

export type UserType = {
  id?: number;
  username?: string;
  email?: string;
  home_address?: string;
  phone_number?: string;
  location?: [number, number] | null;
} | null;

const hardcodedUser: UserType = {
  id: 1,
  username: 'john_doe',
  email: 'john@example.com',
  home_address: '123 Main St',
  phone_number: '555-123-4567',
  location: [-1.0362, 37.0728]
};

type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const UserContext = createContext<UserContextType>({
  user: hardcodedUser,
  setUser: () => {}
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(hardcodedUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
