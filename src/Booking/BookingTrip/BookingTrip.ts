import { Baggage } from "../../Person/Material/Baggage";
import { Passenger } from "../../Person/Passenger/Passenger";
import { BookingFlight } from "../BookingFlight/BookingFlight";


export enum ReturnTicket {
    return = "reTurnTrip"
}
export class BookingTrip {
    private passengers: Passenger[] = [];
    private Baggages: Baggage[] = [];
    private bookingFlight: BookingFlight[] = [];
    private returnTicket: ReturnTicket[] = [];

    public getBookingFlight(){
        return this.bookingFlight;
    }

    public setReturnTicket(returnTicket: ReturnTicket) {
        this.returnTicket?.push(returnTicket);
    }

    public addPassengerBag(bag: Baggage) {
        this.Baggages.push(bag);
    }

    public addBookingFlight(bookingFlight:BookingFlight) {
        this.bookingFlight.push(bookingFlight)
    }

    public getAllReturnTicket(): number {
        let numberOfReturnTicket: number = 0;
        this.returnTicket.forEach((returnTiket) => {
            if (returnTiket) {
                numberOfReturnTicket += 1;
            }
        })
        return numberOfReturnTicket;
    }
}
