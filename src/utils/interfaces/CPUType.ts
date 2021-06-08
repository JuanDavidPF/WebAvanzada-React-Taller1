

export interface CPUType  {
  brand: string;
  reference: string;
  price: number;
  socketCompatibility: string[];
  clockFrecuency: number;
  cores: number;
  threads: number;
  TDP: number;
  memorySupportTechnology: "SDR" | "DDR" | "DDR2" | "DDR3" | "DDR4" | "DDR5";
  memorySupportCapacity: number;


} //closes CPU interface declaration
