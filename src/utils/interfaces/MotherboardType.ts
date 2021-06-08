import { CPUType  } from "./CPUType";
import { GPUType  } from "./GPUType";
import { HDDType  } from "./HDDType";
import { RAMType  } from "./RAMType";

export interface MotherboardType  {
  brand: string;
  reference: string;
  socket: string;
  memorySupportTechnology: "SDR" | "DDR" | "DDR2" | "DDR3" | "DDR4" | "DDR5";
  MHz: number;
  RAMSlotsAmount: number;
  GPUSlotsAmount: number;

  CPU?: CPUType ;
  GPUS?: GPUType [];
  RAMS?: RAMType [];
  HDDS?: HDDType [];
} //closes MotherboardType interface declaration
