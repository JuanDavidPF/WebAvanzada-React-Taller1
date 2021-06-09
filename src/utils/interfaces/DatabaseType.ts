import { ChasisType } from "./ChasisType";
import { CPUType } from "./CPUType";
import { GPUType } from "./GPUType";
import { HDDType } from "./HDDType";
import { MotherboardType } from "./MotherboardType";
import { RAMType } from "./RAMType";

export interface DatabaseType {
  Motherboards?: MotherboardType[];
  CPUs?: CPUType[];
  GPUs?: GPUType[];
  RAMs?: RAMType[];
  HDDs?: HDDType[];
  Chassis?: ChasisType[];
} //closes DatabaseType interface declaration
