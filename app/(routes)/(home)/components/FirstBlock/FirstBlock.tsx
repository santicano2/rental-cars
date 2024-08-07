import Image from "next/image";

export function FirstBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <div className="p-6 lg:pl-40">
        <h1 className="text-4xl lg:text-8xl font-bold">
          Premium <span className="block">Car rental</span>
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Drive the best premium cars from around the world with AutoExpress.
        </p>
      </div>

      <div className="flex justify-end">
        <Image
          src="/images/porsche.png"
          alt="Rent cars"
          width={800}
          height={800}
          priority
        />
      </div>
    </div>
  );
}
