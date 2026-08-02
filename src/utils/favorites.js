const STORAGE_KEY = 'pathfinder_favorites';

export const getFavorites = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to load favorites', e);
    return [];
  }
};

export const isFavorite = (certId) => {
  const favorites = getFavorites();
  return favorites.includes(certId);
};

export const toggleFavorite = (certId) => {
  try {
    const favorites = getFavorites();
    let newFavorites;
    if (favorites.includes(certId)) {
      newFavorites = favorites.filter(id => id !== certId);
    } else {
      newFavorites = [...favorites, certId];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
    return newFavorites;
  } catch (e) {
    console.error('Failed to toggle favorite', e);
    return [];
  }
};
