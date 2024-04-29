import { Passenger } from "../Person/Passenger/Passenger";
import { BookingTrip } from "./BookingTrip/BookingTrip";

export class Booking {
    private passengers: Passenger[] = [];
    private bookingTrips: BookingTrip[] = [];
    constructor(private bookingReferenceNumber: string, private bookingId: string) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.bookingId = bookingId;
    }

    getReferenceNumberInBooking() {
        return this.bookingReferenceNumber;
    }


    isPassengerRegferenceNumberEqual(newbookingReferenceNumber: string): boolean {
        return this.bookingReferenceNumber === newbookingReferenceNumber
    }

    getPassengers():Passenger[] {
        return this.passengers;
    }


    getBookingTrip(): number {
        let numberOfBookingTrip: number = 0;
        this.bookingTrips.forEach(trip => {
            if (trip) {
                numberOfBookingTrip += 1;
            }
        })
        return numberOfBookingTrip;

    }

    getAllBookingTrips() {
        return this.bookingTrips;
    }
    addBookingTrips(trip:BookingTrip){
        this.bookingTrips.push(trip)
    }
    addPassenger(passenger:Passenger){
        this.passengers.push(passenger)
    }
}