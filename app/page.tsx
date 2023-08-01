import Image from "next/image";
import FoodList from "./_components/FoodList";
import FoodProvider from "./_components/FoodProvider";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import RQProvider from "./_components/RQProvider";
import RQFoodList from "./_components/RQFoodList";
export default function Home() {
  const foodReq = fetch("http:localhost:3000/api/foods", {
    cache: "no-cache",
  }).then((res) => res.json());
  // .then((res) => {
  //   throw new Error("bad response");
  // });

  return (
    <RQProvider>
      <ErrorBoundary fallback={<div>something wrong</div>}>
        <FoodProvider foodPromise={foodReq}>
          <Suspense fallback={<div>loading ...</div>}>
            <FoodList />
          </Suspense>
          <RQFoodList />
        </FoodProvider>
      </ErrorBoundary>
    </RQProvider>
  );
}
