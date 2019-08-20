import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numberCollection);
numberSorter.sort();

const charactersCollection = new CharactersCollection('BaBaC');
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();

console.log(numberCollection.data);
console.log(charactersCollection.data);
