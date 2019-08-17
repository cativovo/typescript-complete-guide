const drink: {
  color: string;
  carbonated: boolean;
  sugar: number;
} = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 20];
