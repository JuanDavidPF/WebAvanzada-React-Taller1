export interface GPUType {

  brand: string;
  reference: string;
  cores: number;
  clockFrecuency: number;
  GDDR: "GGDR" | "GGDR2" | "GGDR3" | "GGDR4" | "GGDR5" | "GGDR6";
  VRAM: "4GB" | "6GB" | "8GB" | "12GB" | "16GB"| "24GB"| "48GB";
  price: number
  thumbnailImg?:string;
  viewerImg?:string;

} //closes GPUType interface declaration
