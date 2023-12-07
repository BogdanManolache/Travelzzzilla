'use client';

import { createContext, useContext, useReducer } from 'react';

const CitiesContext = createContext(null);

const initialState = {
  cities: [
    //   {
    //     id: 683844,
    //     name: 'Brasov',
    //     latitude: 45.64861,
    //     longitude: 25.60613,
    //     elevation: 573,
    //     country_code: 'RO',
    //     timezone: 'Europe/Bucharest',
    //     population: 276088,
    //     country: 'Romania',
    //     admin1: 'Braşov',
    //   },
    //   {
    //     id: 11500079,
    //     name: 'Brasov Heliport',
    //     latitude: 45.65777,
    //     longitude: 25.55702,
    //     elevation: 543,
    //     country_code: 'RO',
    //     timezone: 'Europe/Bucharest',
    //     country: 'Romania',
    //     admin1: 'Braşov',
    //   },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'cities/deleted':
      return { ...state, cities: [] };

    case 'city/added': {
      if (
        state.cities.find(
          city =>
            action.payload.name === city.name &&
            action.payload.admin1 === city.admin1,
        )
      )
        return { ...state };
      return { ...state, cities: [...state.cities, action.payload] };
    }

    case 'city/deleted':
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== action.payload),
      };

    default:
      throw new Error('Action unknown!');
  }
}

export default function CitiesContextProvider({ children }) {
  const [{ cities }, dispatch] = useReducer(reducer, initialState);

  return (
    <CitiesContext.Provider value={{ cities, dispatch }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error('CitiesContext was used outside of the CitiesProvider');

  return context;
}
