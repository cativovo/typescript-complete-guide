class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle: Vehicle = new Vehicle('Red');

const civic: Car = new Car('Pink', 4);
civic.startDrivingProcess();
