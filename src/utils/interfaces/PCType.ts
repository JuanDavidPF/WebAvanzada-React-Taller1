import { ChasisType } from "./ChasisType";
import { MotherboardType } from "./MotherboardType";

export interface PCType  {
    motherboard?: MotherboardType;
    chassis?: ChasisType;
    price: number;
  } //closes PCType interface declaration
  