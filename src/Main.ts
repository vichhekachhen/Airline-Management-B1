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
import { Baggage } from "./Person/Material/Baggage";
import { Gate } from "./Airport/Gate";
import { Chef } from "./Person/Employee/Chef";
import { Address } from "./Adress/Adress";
import { Seat } from "./Airplane/Seat";


//create airline
let Airline1 = new Airline("PHP Airline");
let Airline2 = new Airline('OOP Airline');
// create pilots
let pilot1 = new Pilot('Rith', 'Thea',  Gender.MALE,34,'Khmer',33333 )
let pilot2 = new Pilot('Nimol', 'Nim',  Gender.FEMALE,35,'Khmer',33333 )
//create employees
let emyployee1 = new Employee( "Lisa", "Ly",  Gender.MALE, 27,"Khmer", 5000);
let emyployee2 = new Employee( "Reak", "Phung",  Gender.MALE, 24,"Khmer", 5000);
// create chef
let chef1 = new Chef('Davit', 'Veoun',  Gender.MALE,27,'Khmer',6000 )
let chef2 = new Chef('Lina', 'Dim',  Gender.FEMALE,30,'Khmer',6000 )
// create passenger
let passenger1 = new Passenger('Vichheka', 'Chhen', Gender.FEMALE, 20, Meal.HALAL);
let passenger2 = new Passenger('Thearit', 'Houy',  Gender.MALE,21,'Khmer', Meal.KOSHER )
let passenger3 = new Passenger('Davit', 'Cheoun',  Gender.MALE,21,'Khmer', Meal.KOSHER ) 
// create bookingTicket
let bookingTicket1 = new Booking("BB1","B12");
let bookingTicket2 = new Booking("BB2","B13");
//create bookingFlight
let bookingFlight1 = new BookingFlight();
let bookingFlight2 = new BookingFlight();
// create bookingTrip
let trip1 = new BookingTrip();
let trip2 = new BookingTrip();
// create flight 
let flight = new Flight('AD1');
let flight1 = new Flight('A1')
let flight2 = new Flight('A2')
let flight3 = new Flight('A3')
// create date
let date1 = new DateTime('23/04/2024','11:00 AM');
let date2 = new DateTime('23/04/2024','11:00 PM');
let date3 = new DateTime('23/04/2024','10:30 AM');
// create Adress
let PhnomPenh = new Address("Phnom Penh","Cambodia");
let SeimReap = new Address("Seim Reap","Cambodia");
// create gate
let gate1 = new Gate("B05");
let gate2 = new Gate("A07");
// create Baggage
let baggage1 = new Baggage(30);
let baggage2 = new Baggage(35);
// create seat 
let seat1 = new Seat("B007");




// Q1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number (flights, bags, customer information…)

// bookingTicket1.isPassengerRegferenceNumberEqual("B12");
// bookingTicket1.addPassenger(passenger1);
// Airline1.addBooking(bookingTicket1)
// passenger1.setBooking(bookingTicket1);

console.log('Q1/',Airline1.getPassengerTripDetails);


// Q2. As an airline manager, I want to know for a given flight, how many passengers were booking return tickets.
trip1.setReturnTicket(ReturnTicket.return);
trip1.setReturnTicket(ReturnTicket.return);

// console.log("Q2/ Given flight:", flight1, "And the number of passengers booking return tickets:", trip1.getAllReturnTicket());


// Q3. As an airline pilot, I want to know, for a given date, how many flights I have to join.
pilot1.addDateFlight(date1);
pilot1.addDateFlight(date2);
pilot1.addDateFlight(date3);
pilot1.addFlight(flight1);
pilot1.addFlight(flight2);
pilot1.addFlight(flight3);

// console.log("Q3/ Date and time flights that pilot has to join: ", pilot1);


// 4. As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare.
bookingFlight2.getMealsFromBookingFlight()
bookingFlight2.setAMealFromBookingFlight(Meal.VEGENTARIAN);
bookingFlight2.setAMealFromBookingFlight(Meal.HALAL);
bookingFlight2.setAMealFromBookingFlight(Meal.KOSHER);

flight.addBookingFlight(bookingFlight2);
flight.addMealFromBookingFlight();
chef1.getMeals();

// console.log("Q4/ Meal type that Airline chef need to prepare: ",flight.getMeals());


// Q5 As an airline manager, I want to find out how much salary I pay all my employees
Airline1.addEmployee(emyployee1)

// console.log("Q5/ The money that airline manager need to pay for all employees:",Airline1.getAllSalary());


// Q6 As a passenger, I want to know which gate my plane is waiting at.
flight.addGate(gate1);
bookingFlight2.setFlight(flight)
bookingFlight2.setAGateInBookingFlight(gate1)
passenger1.addBookingFlight(bookingFlight2);
passenger1.getGateForPassenger();

// console.log("Q6/ The plane is waiting at: ",passenger1.getGateForPassenger()); 






