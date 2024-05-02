import { Passenger } from "../Person/Passenger/Passenger";
import { BookingTrip } from "./BookingTrip/BookingTrip";

export class Booking {
    private passengers: Passenger[] = [];
    private bookingTrips: BookingTrip[] = [];
    constructor(private bookingReferenceNumber: string, private bookingId: string) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.bookingId = bookingId;
    }

    public isPassengerRegferenceNumberEqual(newbookingReferenceNumber: string): boolean {
        return this.bookingReferenceNumber === newbookingReferenceNumber;
    }
    
    public getBookingReferenceNumber():string{
        return this.bookingReferenceNumber;
    }

    public getReferenceNumberInBooking() {
        return this.bookingReferenceNumber;
    }

    public getPassengers():Passenger[] {
        return this.passengers;
    }

    public getAllBookingTrips() {
        return this.bookingTrips;
    }

    public addBookingTrips(trip:BookingTrip){
        this.bookingTrips.push(trip)
    }
    public addPassenger(passenger:Passenger){
        this.passengers.push(passenger)
    }

    public getBookingTrip(): number {
        let numberOfBookingTrip: number = 0;
        this.bookingTrips.forEach(trip => {
            if (trip) {
                numberOfBookingTrip += 1;
            }
        })
        return numberOfBookingTrip;

    }
}