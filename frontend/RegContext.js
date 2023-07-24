import React, { createContext, useReducer, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    profilePhoto: null,
    gender: null,
    skill: null,
    phoneNumber: null,
    availability: null,
    blurb: null,
    lastName: null,
    firstName: null,
    location: null,
  };

  const ACTIONS = {
    SET_PROFILE_PHOTO: 'SET_PROFILE_PHOTO',
    SET_GENDER: 'SET_GENDER',
    SET_SKILL: 'SET_SKILL',
    SET_PHONE_NUMBER: 'SET_PHONE_NUMBER',
    SET_AVAILABILITY: 'SET_AVAILABILITY',
    SET_BLURB: 'SET_BLURB',
    SET_LAST_NAME: 'SET_LAST_NAME',
    SET_FIRST_NAME: 'SET_FIRST_NAME',
    SET_LOCATION: 'SET_LOCATION',
  };


// Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_PROFILE_PHOTO':
        return { ...state, profilePhoto: action.payload };
      case 'SET_GENDER':
        return { ...state, gender: action.payload };
      case 'SET_SKILL':
        return { ...state, skill: action.payload };
      case 'SET_PHONE_NUMBER':
        return { ...state, phoneNumber: action.payload };
      case 'SET_AVAILABILITY':
        return { ...state, availability: action.payload };
      case 'SET_BLURB':
        return { ...state, blurb: action.payload };
      case 'SET_LAST_NAME':
        return { ...state, lastName: action.payload };
      case 'SET_FIRST_NAME':
        return { ...state, firstName: action.payload };
      case 'SET_LOCATION':
        return { ...state, location: action.payload };
      default:
        return state;
    }
  };

const RegContext = createContext();

const RegContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const saveData = async () => {
      try {
        const jsonData = JSON.stringify(state);
        await AsyncStorage.setItem("regFormData", jsonData);
      } catch (error) {
        console.error("Error storing registration form data in AsyncStorage:", error);
      }
    };

    saveData();
    console.log(state); // Log the state whenever it changes
  }, [state]);

  return (
    <RegContext.Provider value={{ state, dispatch }}>
      {children}
    </RegContext.Provider>
  );
};

const useRegContext = () => {
  const context = useContext(RegContext);
  if (!context) {
    throw new Error("useRegContext must be used within a RegContextProvider");
  }
  return context;
};

export { RegContextProvider, useRegContext, ACTIONS };
