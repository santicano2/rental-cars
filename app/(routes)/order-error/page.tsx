import Link from "next/link";

import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";

export default function OrderErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">
            Ops! Something went wrong, try again later
          </h1>
          <Link href="/">
            <Button>See all the cars available</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
