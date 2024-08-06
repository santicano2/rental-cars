import { redirect } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { ListLovedCars } from "./components/ListLovedCars";

export default function PageLovedCars() {
  const { userId } = useAuth();

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
