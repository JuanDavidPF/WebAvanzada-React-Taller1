import { RAMTechType } from "./RAMTech";

export interface RAMType {
  brand: string;
  reference: string;
  price: number;
  capacity: 1 | 2 | 4 | 8 | 16 | 32| 64;
  amount: 1 | 2 | 4| 8;
  technology: RAMTechType;
  MHz: number;
  thumbnailImg: string;
  viewerImg?: string;
} //closes RAMType interface declaration
