import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

import { Button } from "@/components/ui/button";

import { TableReserves } from "./components/TableReserves";

export default async function PageReserves() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const order = await db.order.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl">Reserves</h1>
      {order.length === 0 ? (
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-xl">You don&apos;t have any reserves</h2>
          <p>Create one in the cars page</p>
          <Link href="/dashboard">
            <Button>Go to cars</Button>
          </Link>
        </div>
      ) : (
        <TableReserves />
      )}
    </div>
  );
}
