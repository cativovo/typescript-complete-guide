// https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes
export abstract class Sorter {
  // Kelangan iimplement ng mga children ni Sorter
  //  yung mga props at methods na may 'abstract' keyword
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length }: { length: number } = this;

    // Bubble Sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
