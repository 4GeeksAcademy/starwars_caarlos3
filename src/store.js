export const initialStore = () => {
  return {
    message: null,
    characters: [],
    planets: [],
    vehicles: [],
    favorites: [],
  };
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'CHARACTERS_ADD':
      return { ...store, characters: action.payload };
    case 'PLANETS_ADD':
      return { ...store, planets: action.payload };
    case 'VEHICLES_ADD':
      return { ...store, vehicles: action.payload };
    case 'FAVORITES_ADD':
      return { ...store, favorites: [...store.favorites, action.payload] };
    case 'FAVORITES_REMOVE':
      return {
        ...store,
        favorites: store.favorites.filter((item) => item.uid !== action.payload),
      };
    default:
      throw Error('Unknown action.');
  }
}