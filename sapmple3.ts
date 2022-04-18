import { Point } from "./sample";

export class ColorPoint extends Point{
    constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: string){
        super(x1, y1, z1, x2, y2, z2);
        this.color = color;
    }
    color: string;
}
export {Point}