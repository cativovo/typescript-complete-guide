import 'reflect-metadata';

// const plane = { color: 'red' };

// Attach metedata to plane object
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const planeNote = Reflect.getOwnMetadata('note', plane);
// const planeHeight = Reflect.getOwnMetadata('height', plane);
// console.log(planeNote);
// console.log(planeHeight);

// Reflect.defineMetadata('note', 'hi there', plane, 'color'); // attach metadata to plane's color property

// const planeColorNote = Reflect.getMetadata('note', plane, 'color'); // get metadata of plane's color property
// console.log(planeColorNote);

@printPlaneMetaData
class Plane {
  color: string = 'red';

  @markFunction('HI there')
  fly(): void {
    console.log('flying');
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// typeof Plane === Plane's constructor
function printPlaneMetaData(target: typeof Plane) {
  const targetPrototype = target.prototype;

  for (let key in targetPrototype) {
    const secret = Reflect.getMetadata('secret', targetPrototype, key);

    console.log(secret);
  }
}
