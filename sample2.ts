import { ColorPoint } from "./sapmple3";

var myPoint: ColorPoint = new ColorPoint(1,2,2,2,2,2, '\x1b[31m')

console.log(myPoint.color + "Відстань між точкою та 0  : " + myPoint.Distanse1ToZero());
console.log(myPoint.color + "Відстань між двома точками: " + myPoint.Distanse1To2());
