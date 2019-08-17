const add = (a: number, b: number): number => a + b;

function divide(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => console.log(message);

const todaysWeather: { date: Date; weather: string } = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
