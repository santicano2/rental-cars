"use client";

import { Car } from "@prisma/client";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { useLovedCars } from "@/hooks/use-loved-cars";
import { ListCarsProps } from "./ListCars.types";

import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { Button } from "@/components/ui/button";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { userId } = useAuth();

  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  if (!cars) {
    return <p>Skeleton...</p>;
  }

  return (
    <>
      {cars.length === 0 && <h2>No cars where found with this filters</h2>}
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {cars.map((car: Car) => {
          const {
            priceDay,
            photo,
            name,
            type,
            cv,
            transmission,
            people,
            engine,
            id,
          } = car;

          const likedCar = lovedItems.some((item) => item.id === car.id);

          return (
            <div
              key={id}
              className="p-1 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between"
            >
              <Image
                src={photo}
                alt={name}
                width={400}
                height={600}
                className="rounded-lg"
              />
              <div className="p-3">
                <div className="flex flex-col mb-3 gap-x-4">
                  <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                  <p>{priceDay}$ /day</p>
                </div>
                <p className="flex items-center capitalize">
                  <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                  {type}
                </p>

                <p className="flex items-center capitalize">
                  <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                  {transmission}
                </p>

                <p className="flex items-center capitalize">
                  <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                  {people}
                </p>

                <p className="flex items-center capitalize">
                  <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                  {engine}
                </p>

                <p className="flex items-center capitalize">
                  <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                  {cv} CV
                </p>

                {userId ? (
                  <div className="flex items-center justify-center gap-x-3">
                    <ModalAddReservation car={car} />
                    <Heart
                      className={`mt-2 cursor-pointer ${
                        likedCar && "fill-red-500"
                      }`}
                      onClick={
                        likedCar
                          ? () => removeLovedItem(car.id)
                          : () => addLoveItem(car)
                      }
                    />
                  </div>
                ) : (
                  <div className="w-full mt-2 text-center">
                    <Link href="/sign-in">
                      <Button variant="outline" className="w-full">
                        Sign in to reserve a car
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
