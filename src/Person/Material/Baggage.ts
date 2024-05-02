export class Baggage{
    private bagID:number;
    private weight:number;
    constructor( bagID:number,weight:number){
        this.bagID = bagID;
        this.weight = weight;
    }
    public getBagID():number{
        return this.bagID;
    }
    public getWeight():number{
        return this.weight;
    }
}