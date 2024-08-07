import { db } from "@/lib/db";

import { Navbar } from "@/components/Shared/Navbar";

export default async function PageCars() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <p>Headers cars...</p>
        <div>
          <p>Filters and list cars...</p>
        </div>
      </div>
    </div>
  );
}
