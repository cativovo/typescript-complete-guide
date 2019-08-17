interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

interface Drink {
  color: string;
  carbonated: boolean;
  sugar: number;
}

// with type of Vehicle AND Reportable
const oldCivic: Vehicle & Reportable = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `
      Name: ${this.name}
      Year: ${this.year}
      Broken? ${this.broken}
      `;
  },
};

// with type of Drink AND Reportable
const coke: Drink & Reportable = {
  color: 'brown',
  carbonated: true,
  sugar: 400,
  summary(): string {
    return `
      Color: ${this.color}
      Sugar: ${this.sugar}
      Carbonated? ${this.carbonated}
      `;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(coke);
