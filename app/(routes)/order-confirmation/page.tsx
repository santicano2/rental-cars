import Link from "next/link";

import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";

export default function OrderConfirmationPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">¡Thank you for trusting in us!</h1>
          <p>
            Your order is being processed, check your email for more details
          </p>
          <p>You can see all your orders in your profile</p>
          <Link href="/">
            <Button>See all the cars available</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
