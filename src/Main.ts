import { Gender } from "./Person/Gender";
import { Passenger } from "./Person/Passenger/Passenger";
import { Employee } from "./Person/Employee/Employee";
import { Pilot } from "./Person/Employee/Pilot";
import { Airline } from "./Airline/Airline";
import { Booking } from "./Booking/Booking";
import { BookingFlight } from "./Booking/BookingFlight/BookingFlight";
import { Meal } from "./Booking/Meal/Meal";
import { DateTime } from "./Date/DateTime";
import { Flight } from "./Flight/Flight";
import { BookingTrip, ReturnTicket } from "./Booking/BookingTrip/BookingTrip";


// Q1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number (flights, bags, customer information…)

let Airline1 = new Airline("PHP Airline");
let passenger1 = new Passenger('vichheka', 'chhen', Gender.FEMALE, 20, Meal.HALAL);
let bookingTicket1 = new Booking("B1","B12");

bookingTicket1.isPassengerRegferenceNumberEqual("B12");
bookingTicket1.addPassenger(passenger1);
Airline1.addBooking(bookingTicket1)
passenger1.setBooking(bookingTicket1);

// console.log(passenger1);
// console.log(Airline1.getDetailPassenger);


// Q2. As an airline manager, I want to know for a given flight, how many passengers were booking return tickets.

let airline1 = new Airline('OOP Airline');
let emyployee1 = new Employee( "Vichheka", "Chhen",  Gender.MALE, 20,"Khmer", 2500);
let booking1 = new Booking('B1','B12');

let passenger2 = new Passenger('Thearit', 'Houy',  Gender.MALE,21,'Khmer', Meal.KOSHER )
booking1.addPassenger(passenger2)

let trip1 = new BookingTrip();
trip1.setReturnTicket(ReturnTicket.return);
trip1.setReturnTicket(ReturnTicket.return);
trip1.setReturnTicket(ReturnTicket.return);

let bookingFlight = new BookingFlight();
bookingFlight.setAMealFromBookingFlight(Meal.KOSHER);
bookingFlight.setAMealFromBookingFlight(Meal.HALAL);
bookingFlight.getMealsFromBookingFlight()
trip1.addBookingFlight(bookingFlight)
booking1.addBookingTrips(trip1)
airline1.addEmployee(emyployee1);
airline1.addBooking(booking1);

// console.log("passengers were booking return tickets :",trip1.getAllReturnTicket()) 


// Q3. As an airline pilot, I want to know, for a given date, how many flights I have to join.

let passenger = new Passenger('Thearit', 'Houy',  Gender.MALE,21,'Khmer', Meal.KOSHER ) 
let bookingFlight1 = new BookingFlight();
let pilot1 = new Pilot('Thearit', 'Houy',  Gender.MALE,21,'Khmer',3000 )
let flight1 = new Flight('A1')
let flight2 = new Flight('A2')
let flight3 = new Flight('A3')
let date3 = new DateTime('23/04/2024','10:30 AM');
let date1 = new DateTime('23/04/2024','11:00 AM');
let date2 = new DateTime('23/04/2024','11:00 PM');

passenger.addBookingFlight(bookingFlight1)
bookingFlight1.addPassengers(passenger)
bookingFlight1.setAMealFromBookingFlight(Meal.VEGENTARIAN)
bookingFlight1.setAMealFromBookingFlight(Meal.VEGAN)

pilot1.addDateFlight(date1);
pilot1.addDateFlight(date2);
pilot1.addDateFlight(date3);
pilot1.addFlight(flight1);
pilot1.addFlight(flight2);
pilot1.addFlight(flight3);

console.log(pilot1);






