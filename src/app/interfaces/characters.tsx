import  { StaticImageData } from 'next/image'

export interface Characters {
  name: string;
  img: StaticImageData;
  x: number;
  y: number;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}