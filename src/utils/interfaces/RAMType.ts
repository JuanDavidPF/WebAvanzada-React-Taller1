import { RAMTechType } from "./RAMTech";

export interface RAMType  {
  brand: string;
  reference: string;
  price: number;
  capacity: "1GB" | "2GB" | "4GB" | "8GB" | "16GB" | "32GB";
  technology: RAMTechType;
  ns: number;
  MHz: number;
  CL: number;
  thumbnailImg?:string;
  viewerImg?:string;
} //closes RAMType interface declaration
