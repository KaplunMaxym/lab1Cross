class Point{
    constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number){
        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;

        this.x2 = x2;
        this.y2 = y2;
        this.z2 = z2;
    }
    x1: number;
    y1: number;
    z1: number;

    x2: number;
    y2: number;
    z2: number;

    Distanse1ToZero(){
        return Math.sqrt(Math.pow((this.x1 - 0),2) + Math.pow((this.y1 - 0),2) + Math.pow((this.z1 - 0),2))
    }
    Distanse1To2(){
        return Math.sqrt(Math.pow((this.x1 - this.x2),2) + Math.pow((this.y1 - this.y2),2) + Math.pow((this.z1 - this.z2),2))
    }
}

export {Point}