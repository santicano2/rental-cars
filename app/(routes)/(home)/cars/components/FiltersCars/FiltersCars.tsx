import * as React from "react";
import { Trash } from "lucide-react";

import { FiltersCarsProps } from "./FiltersCars.types";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FiltersCars(props: FiltersCarsProps) {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };

  return (
    <div className="mt-5 mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:gap-5">
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Type</SelectLabel>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="coupe">Coupé</SelectItem>
            <SelectItem value="hatchback">Hatchback</SelectItem>
            <SelectItem value="pickup">Pickup</SelectItem>
            <SelectItem value="deluxe">Deluxe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Transmission" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Transmission</SelectLabel>
            <SelectItem value="automatic">Automatic</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Engine" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Engine</SelectLabel>
            <SelectItem value="petrol">Petrol</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="hibrid">Hibrid</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="People" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>People</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Remove filters <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
