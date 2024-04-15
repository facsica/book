import React, { createContext, useContext, useReducer } from "react";

// สร้าง Context
export const StateContext = createContext();

// สร้าง Provider ที่ใช้เก็บ state และ dispatch จาก useReducer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook สำหรับใช้งาน state และ dispatch จาก Context
export const useStateValue = () => useContext(StateContext);