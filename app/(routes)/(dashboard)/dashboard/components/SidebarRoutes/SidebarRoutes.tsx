"use client";

import { useAuth } from "@clerk/nextjs";

import { isAdmin } from "@/lib/isAdmin";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";

import { Separator } from "@/components/ui/separator";

import { SidebarItem } from "./SidebarItem";

export function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        {isAdmin(userId) && (
          <div className="p-2 md:p-6">
            <p className="mb-2 text-slate-500">ADMIN</p>
            {dataAdminSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>

      <div>
        <Separator />

        <footer className="p-3 mt-3 text-center">
          2024. All rights reserved
        </footer>
      </div>
    </div>
  );
}
