import { Airline } from "./Airline/Airline";
import { Booking } from "./Booking/Booking";
import { BookingFlight } from "./Booking/BookingFlight/BookingFlight";
import { BookingTrip, ReturnTicket } from "./Booking/BookingTrip/BookingTrip";
import { Meal } from "./Booking/Meal/Meal";
import { Employee } from "./Person/Employee/Employee";
import { Gender } from "./Person/Gender";
import { Passenger } from "./Person/Passenger/Passenger";


// Q1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number (flights, bags, customer information…)
let Airline1 = new Airline("PHP Airline");
let passenger1 = new Passenger('vichheka', 'chhen', Gender.FEMALE, 20, Meal.HALAL);

let bookingTicket1 = new Booking("B1","B12");
bookingTicket1.isPassengerRegferenceNumberEqual("B12");

bookingTicket1.addPassenger(passenger1);

Airline1.addBooking(bookingTicket1)
passenger1.setBooking(bookingTicket1);

// console.log(bookingTicket1);


// Q2. As an airline manager, I want to know for a given flight, how many passengers were booking return tickets.
let airline1 = new Airline('OOP Airline');
let emyployee1 = new Employee( "Vichheka", "Chhen",  Gender.MALE, 20,"Khmer", 2500);
let booking1 = new Booking('B1','B12');


// create passenger booking 
let passenger2 = new Passenger('vichheka', 'chhen',  Gender.FEMALE,19,'Khmer', Meal.HALAL )
booking1.addPassenger(passenger2)

let trip1 = new BookingTrip();
let trip2 = new BookingTrip();
let trip3 = new BookingTrip();
trip1.setReturnTicket(ReturnTicket.return);
trip1.setReturnTicket(ReturnTicket.return);

let bookingFlight2 = new BookingFlight();
bookingFlight2.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight2.setAMealFromBookingFlight(Meal.HALAL);
bookingFlight2.getMealsFromBookingFlight()

let bookingFlight3 = new BookingFlight();
bookingFlight3.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight3.getMealsFromBookingFlight()

let bookingFlight4 = new BookingFlight();
bookingFlight4.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight4.getMealsFromBookingFlight()

trip1.addBookingFlight(bookingFlight2)
trip2.addBookingFlight(bookingFlight3)
trip3.addBookingFlight(bookingFlight4)

booking1.addBookingTrips(trip1)
booking1.addBookingTrips(trip2)
booking1.addBookingTrips(trip3)

airline1.addEmployee(emyployee1);
airline1.addBooking(booking1);

console.log(airline1);





