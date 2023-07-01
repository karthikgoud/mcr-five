import { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "../data/data";

export const DataContext = createContext();

const initialState = {
  recipeData: data,
  text: "",
  type: "",
};

const reducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "ADD_RECIPE":
      return { ...state, recipeData: [...state.recipeData, payload] };

    case "DELETE_RECIPE":
      const filteredList = state.recipeData.filter(
        (recipe) => recipe?._id !== payload?._id
      );
      return { ...state, recipeData: filteredList };

    case "filterName":
      return { ...state, text: payload };

    case "type":
      return { ...state, type: payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const textFiltered = state.recipeData.filter((recipe) =>
    recipe.name.toLowerCase().includes(state.text.toLowerCase())
  );

  return (
    <DataContext.Provider value={{ state, dispatch, textFiltered }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
