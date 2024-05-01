import { Booking } from "../Booking/Booking";
import { Employee } from "../Person/Employee/Employee";
import { Passenger } from "../Person/Passenger/Passenger";

export class Airline {
    private emplyees: Employee[] = [];
    private bookings: Booking[] = [];
    constructor(private name: string) {
        this.name = name;
    }

    public getAllSalary(): number {
        let allSalary = 0;
        this.emplyees.forEach(salary => {
            allSalary += salary.getSalary()
        });
        return allSalary;
    }

    public addEmployee(employee: Employee) {
        this.emplyees.push(employee);
    }

    public getAllMoneyNeedToPay(): number {
        let money: number = 0;
        this.emplyees.forEach((salary) => {
            money += salary.getSalary();
        })
        return money;
    }

    public addBooking(booking: Booking) {
        this.bookings.push(booking)
    }
    
    public getAllBookings(): number {
        let allBookings = 0;
        this.bookings.forEach(booking => {
            allBookings += booking.getBookingTrip();
        });
        return allBookings;
    }
    
    public getInfoOfPassengerByBookingReferenceNumber(bookingReferenceNumber: string): Booking | undefined {
        for (const booking of this.bookings) {
          if (booking.getBookingReferenceNumber() === bookingReferenceNumber) {
            return booking;
          }
        }
        return undefined;
      }

    public getPassengerBookingTicketReturn(): number {
        let passengersReturnTicket: number = 0;
        this.bookings.forEach((bookingTrip) => {
            bookingTrip.getAllBookingTrips().forEach((returnTicket) => {
                passengersReturnTicket += returnTicket.getAllReturnTicket();
            })
        })
        return passengersReturnTicket;
    }

    public getPassengerTripDetails(referenceNumberofTrip: string): Passenger | undefined {
        let Passenger: Passenger | undefined;
        this.bookings.forEach((booking) => {
            booking.getPassengers().forEach((passenger) => {
                if (passenger.getReferenceNumberInPasserenger() === booking.getReferenceNumberInBooking()
                    && booking.isPassengerRegferenceNumberEqual(referenceNumberofTrip)) {
                    Passenger = passenger;
                }
            })
        })
        return Passenger;
    }
    public getAllMealsOfBooking() {
        this.bookings.forEach(booking => {
            booking.getAllBookingTrips().forEach((trip) => {
                trip.getBookingFlight().forEach((flight) => {
                    flight.getMealsFromBookingFlight();
                })
            })
        })
    }
}