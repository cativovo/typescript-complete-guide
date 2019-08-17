const profile: {
  name: string;
  age: number;
  coords: {
    lat: number;
    long: number;
  };
  setAge(age: number): void;
} = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    long: 20,
  },
  setAge(age) {
    this.age = age;
  },
};

// desctructuring
const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
