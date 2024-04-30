import { Booking } from "../Booking/Booking";
import { Employee } from "../Person/Employee/Employee";
import { Passenger } from "../Person/Passenger/Passenger";

export class Airline {
    private emplyees: Employee[] = [];
    private bookings: Booking[] = [];
    constructor(private name: string) {
        this.name = name;
     }

    getAllSalary(): number {
        let allSalary = 0;
        this.emplyees.forEach(salary => {
            allSalary += salary.getSalary()
        });
        return allSalary;
    }

    addEmployee(employee: Employee) {
        this.emplyees.push(employee);
    }

    getAllMoneyNeedToPay(): number {
        let money: number = 0;
        this.emplyees.forEach((salary) => {
            money += salary.getSalary();
        })
        return money;
    }
    
    addBooking(booking: Booking) {
        this.bookings.push(booking)
    }
    getAllBookings(): number {
        let allBookings = 0;
        this.bookings.forEach(booking => {
            allBookings += booking.getBookingTrip();
        });
        return allBookings;
    }

    getPassengerBookingTicketReturn(): number {
        let passengersReturnTicket: number = 0;
        this.bookings.forEach((bookingTrip) => {
            bookingTrip.getAllBookingTrips().forEach((returnTicket) => {
                passengersReturnTicket += returnTicket.getAllReturnTicket();
            })
        })
        return passengersReturnTicket;
    }

    getDetailPassenger(referenceNumberofTrip: string): Passenger | undefined {
        let Apassenger: Passenger | undefined;
        this.bookings.forEach((booking) => {
            booking.getPassengers().forEach((passenger) => {
                if (passenger.getReferenceNumberInPasserenger() === booking.getReferenceNumberInBooking()
                    && booking.isPassengerRegferenceNumberEqual(referenceNumberofTrip)) {
                    Apassenger = passenger;
                }
            })
        })
        return Apassenger;
    }
    getAllMealsOfBooking() {
        this.bookings.forEach(booking => {
            booking.getAllBookingTrips().forEach((trip) => {
                trip.getBookingFlight().forEach((flight) => {
                    flight.getMealsFromBookingFlight();
                })
            })
        })
    }
}