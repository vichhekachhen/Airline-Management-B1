import { Attendant } from "../Person/Employee/Attendant";
import { CoPilot } from "../Person/Employee/Co-Pilot";
import { Pilot } from "../Person/Employee/Pilot";
import { Baggage } from "../Person/Material/Baggage"
import { Passenger } from "../Person/Passenger/Passenger";
import { Seat } from "./Seat"

export class Airplane {
  private seats: Seat[] = [];
  private baggages: Baggage[] = [];
  private passengers: Passenger[] = [];
  private pilots: Pilot[] = [];
  private copilots: CoPilot[] = [];
  private attendants: Attendant[] = [];

  constructor(private airplane: string) {}

  public addSeats(...seats: Seat[]): void {
    this.seats.push(...seats);
  }

  public addBaggages(...baggages: Baggage[]): void {
    this.baggages.push(...baggages);
  }

  public addPassengers(...passengers: Passenger[]): void {
    this.passengers.push(...passengers);
  }

  public addPilots(...pilots: Pilot[]): void {
    this.pilots.push(...pilots);
  }

  public addCoPilots(...copilots: CoPilot[]): void {
    this.copilots.push(...copilots);
  }

  public addAttendants(...attendants: Attendant[]): void {
    this.attendants.push(...attendants);
  }
}