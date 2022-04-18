import { ColorPoint } from "./sapmple3";

var myPoint: ColorPoint = new ColorPoint(1,2,2,2,2,2, '\x1b[31m')

console.log(myPoint.color + myPoint.Distanse1ToZero());
console.log(myPoint.color + myPoint.Distanse1To2());
