import { Sorter } from './Sorter';

// Ichecheck ni typescript kung meron yung mga abstract methods at props ni Sorter
// kay NumbersCollection
export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super(); // para magamit ni NumbersCollection yung mga props at methods ni Sorter
  }

  // magiging property pag gumamit ng getter
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
