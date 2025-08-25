import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FavoritesContext = createContext();

const STORAGE_KEY = "pinoy_recipe_favorites_v1";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const add = (id) => setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  const remove = (id) => setFavorites((prev) => prev.filter((x) => x !== id));
  const toggle = (id) => setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const isFav = (id) => favorites.includes(id);

  const value = useMemo(() => ({ favorites, add, remove, toggle, isFav }), [favorites]);
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
}
