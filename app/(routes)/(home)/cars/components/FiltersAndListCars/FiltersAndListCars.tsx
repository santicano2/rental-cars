"use client";

import { Car } from "@prisma/client";
import { useEffect, useState } from "react";

import { FiltersAndListCarsProps } from "./FiltersAndListCars.types";

import { ListCars } from "../ListCars";

export function FiltersAndListCars(props: FiltersAndListCarsProps) {
  const { cars } = props;

  return (
    <div>
      <p>Filter cars...</p>
      <ListCars cars={cars} />
    </div>
  );
}
