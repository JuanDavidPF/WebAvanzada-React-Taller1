export interface GPUType {
  brand: string;
  reference: string;
  cores: number;
  clockFrecuency: number;
  GDDR: string;
  VRAM: "4GB" | "6GB" | "8GB" | "12GB" | "16GB";
  thumbnailImg?:string;
  viewerImg?:string;
  technologies:
    | "Nvidia G-Sync"
    | "Nvidia DLSS"
    | "Nvidia Ansel"
    | "Nvidia NVLink"
    | "Nvidia GPU Boost"
    | "Nvidia VR Ready"
    | "AMD FreeSync"
    | "AMD CrossFire"
    | "AMD Eyefinity"
    | "AMD ReLive"
    | "AMD VR Ready"
    | "AMD PowerTune"
    | "AMD Radeon Boost";
} //closes GPUType interface declaration
