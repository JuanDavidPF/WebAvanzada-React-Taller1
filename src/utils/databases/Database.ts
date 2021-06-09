import { DatabaseType } from "../interfaces/DatabaseType";
import { ChassisDatabase } from "./ChassisDatabase";
import { CPUDatabase } from "./CPUDatabase";
import { GPUDatabase } from "./GPUDatabase";
import { HDDDatabase } from "./HDDDatabase";
import { MotherboardsDatabase } from "./MotherboardDatabase";
import { RAMDatabase } from "./RAMDatabase";

export const Database: DatabaseType = {
  Chassis: ChassisDatabase,
  Motherboards: MotherboardsDatabase,
  CPUs: CPUDatabase,
  GPUs: GPUDatabase,
  RAMs: RAMDatabase,
  HDDs: HDDDatabase,
};
