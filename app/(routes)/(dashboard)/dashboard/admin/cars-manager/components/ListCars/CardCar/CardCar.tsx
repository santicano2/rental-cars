"use client";

import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CardCarProps } from "./CardCar.types";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function CardCar(props: CardCarProps) {
  const { car } = props;

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
      <Image
        src={car.photo}
        alt={car.name}
        width={400}
        height={600}
        className="rounded-lg"
      />
      {car.isPublish ? (
        <p className="absolute top-0 right-0 p-1 text-center text-white bg-green-700">
          Published
        </p>
      ) : (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-300">
          Not published
        </p>
      )}

      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
          <p>{car.priceDay}$ /day</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center capitalize">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>

          <p className="flex items-center capitalize">
            <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>

          <p className="flex items-center capitalize">
            <Users className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>

          <p className="flex items-center capitalize">
            <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>

          <p className="flex items-center capitalize">
            <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.cv} CV
          </p>
        </div>

        <div className="flex justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={() => console.log("delete")}>
            Delete
            <Trash className="w-4 h-4 ml-2" />
          </Button>

          <p>Button edit car...</p>
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => console.log("Unpublish")}
          >
            Unpublish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            onClick={() => console.log("Publish")}
          >
            Publish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
