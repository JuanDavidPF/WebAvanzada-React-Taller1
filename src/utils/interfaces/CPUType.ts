

export interface CPUType  {
  brand: string;
  reference: string;
  price: number;
  clockFrecuency: number;
  cores: number;
  threads: number;
  TDP?: number;
  thumbnailImg: string;
  viewerImg?:string;

} //closes CPU interface declaration
