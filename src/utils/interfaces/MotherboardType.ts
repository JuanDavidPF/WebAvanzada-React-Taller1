import { CPUType } from "./CPUType";
import { GPUType } from "./GPUType";
import { HDDType } from "./HDDType";
import { RAMTechType } from "./RAMTech";
import { RAMType } from "./RAMType";

export interface MotherboardType {
  price: number;
  brand: string;
  reference: string;
  chipset: string;

  memorySupportTechnology: RAMTechType;
  size: "EATX" | "ATX" | "micro-ATX" | "mini-ITX";

  HDDSlostAmount: number;
  RAMSlotsAmount: number;
  PCIeSlotsAmount: number;

  thumbnailImg?: string;
  viewerImg?: string;
  CPU?: CPUType;
  GPUS?: GPUType[];
  RAMS?: RAMType[];
  HDDS?: HDDType[];
} //closes MotherboardType interface declaration
