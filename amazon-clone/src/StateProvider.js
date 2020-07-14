//setup the data layer
// We need to track the informaition to basket
import React from "react"
import { createContext ,useReducer,useContext} from "react";

export const StateContext = createContext();  // creating an  dataLayer

// BUILD A PROVIDER WE CAN WRAP ENTIRE APP INSIDE THE PROVIDER AND GIVE ASSESS TO THE DATALAYER

export const StateProvider = ({reducer , initialState , children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}> 
    {children}


    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

