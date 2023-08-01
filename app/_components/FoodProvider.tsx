"use client";
import { createContext, useContext } from "react";

const FoodContext = createContext<Promise<string[]> | null>(null);

export const useFoodPromise = () => {
  const promise = useContext(FoodContext);
  if (!promise) {
    throw new Error("useFoodPromise must be used within a FoodProvider");
  }
  return promise;
};

const FoodProvider = ({
  children,
  foodPromise,
}: {
  children: React.ReactNode;
  foodPromise: Promise<string[]>;
}) => {
  return (
    <FoodContext.Provider value={foodPromise}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;
