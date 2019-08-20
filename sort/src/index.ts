import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumbersCollection([10, 3, -5, 0]);
numberCollection.sort();

const charactersCollection = new CharactersCollection('BaBaC');
charactersCollection.sort();

console.log(charactersCollection.data);
console.log(numberCollection.data);
