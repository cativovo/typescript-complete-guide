@classDecorator
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError('errors')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(target: typeof Boat) {
  console.log(target);
}

// index of parameter. galing sa ...args
function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function logError(
  errorMessage: string
): (target: any, key: string, desc: PropertyDescriptor) => void {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot('fast');
