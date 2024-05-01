import { Address } from "../Adress/Adress";
import { Gate } from "./Gate";

export class Airport {
  constructor(private name: string, private address:Address, private gate:Gate) {
    this.name = name;
    this.address = address;
    this.gate = gate;
  }

  public getName(): string {
    return this.name;
  }

  public getGate():Gate{
    return this.gate;
  }

  
}
