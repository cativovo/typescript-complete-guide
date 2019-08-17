const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Prevent incompatiblev values
// carMakers.push(0);

// Help with 'map'
carMakers.map((carMaker: string): string => carMaker.toUpperCase());

// Flexible types
const importantDates: (string | Date)[] = [new Date(), 'yadyad'];
