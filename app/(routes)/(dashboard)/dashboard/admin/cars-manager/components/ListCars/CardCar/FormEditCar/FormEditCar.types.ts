import { Dispatch, SetStateAction } from "react";
import { Car } from "@prisma/client";

export type FormEditCarProps = {
  carData: Car;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
