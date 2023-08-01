"use client";

import { useQuery } from "@tanstack/react-query";
import { useFoodPromise } from "./FoodProvider";

export default function RQFoodList() {
  const foodsPromise = useFoodPromise();
  const { data: foods, isFetching } = useQuery(["foods"], () => foodsPromise);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <div>foods: {foods?.join(", ")}</div>;
}
