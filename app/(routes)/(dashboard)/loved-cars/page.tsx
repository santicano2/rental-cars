import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { ListLovedCars } from "./components/ListLovedCars";

export default function PageLovedCars() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl">Loved cars</h1>

      <ListLovedCars />
    </div>
  );
}
