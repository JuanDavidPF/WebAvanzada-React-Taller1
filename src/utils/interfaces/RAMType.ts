export interface RAMType  {
  brand: string;
  reference: string;
  price: number;
  capacity: "1GB" | "2GB" | "4GB" | "8GB" | "16GB" | "32GB";
  technology: "SDR" | "DDR" | "DDR2" | "DDR3" | "DDR4" | "DDR5";
  ns: number;
  MHz: number;
  CL: number;

} //closes RAMType interface declaration
