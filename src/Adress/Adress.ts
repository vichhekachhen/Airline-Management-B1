export class Address {
    private city: string;
    private country: string;
  
    constructor(city: string, country: string) {
      this.city = city;
      this.country = country;
    }
    
    public getCity(): string {
      return this.city;
    }
  
    public getCountry(): string {
      return this.country;
    }
    
  }
  