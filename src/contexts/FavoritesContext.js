import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getFavorites() {
      const favorites = await AsyncStorage.getItem('@gitfinder:favorites');
      if (favorites) {
        setFavorites(JSON.parse(favorites));
      }
    }
    getFavorites();
  }, [])

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}