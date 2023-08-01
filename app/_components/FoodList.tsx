"use client";

import { use } from "react";
import { useFoodPromise } from "./FoodProvider";

export default function FoodList() {
  const foodsPromise = useFoodPromise();
  const foods = use(foodsPromise);
  return <div>foods: {foods.join(", ")}</div>;
}
