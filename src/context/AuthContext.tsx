import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

export interface UserType {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export const AuthContext = createContext<{
  user: UserType | null;
  signInWithGoogleHandler: () => Promise<void>;
  signOutHandler: () => Promise<void>;
} | null>({
  user: null,
  signInWithGoogleHandler: async () => {},
  signOutHandler: async () => {}
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  //   const [user, setUser] = useLocalStorage<UserType | null>('user', null);
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState<UserType | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const signInWithGoogleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      if (result && result.user) {
        const { uid, displayName, email, photoURL } = result.user;
        const newUser: UserType = { uid, displayName, email, photoURL };
        setUser(newUser);

        // Save user information to local storage
        localStorage.setItem('user', JSON.stringify(newUser));
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const updateLoggedInUser = (newUser: UserType) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const authContextValue = {
    user,
    signInWithGoogleHandler,
    signOutHandler,
    updateLoggedInUser
  };

  // const authContextValue = {
  //   user,
  //   signInWithGoogleHandler,
  //   signOutHandler
  // };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser as UserType | null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
