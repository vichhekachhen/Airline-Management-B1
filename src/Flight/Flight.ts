class Flights {
    private flightNumber: number;
    private flightAddress: string;
    private departureTime: number;
    private arrivalTime: number;
    constructor(flightNumber: number, flightAddress: string, departureTime: number, arrivalTime: number) {
        this.flightNumber = flightNumber;
        this.flightAddress = flightAddress;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    };
    getFlightNumber() {
        return this.flightNumber;
    };
    getFlightAddress() {
        return this.flightAddress;
    };
    getDepartureTime() {
        return this.departureTime;
    };
    getArrivalTime() {
        return this.arrivalTime;
    };
}