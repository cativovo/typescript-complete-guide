import path from 'path';
import { MatchReader } from './MatchReader';
import { CsvReader } from './CsvReader';

const filePath = path.join(__dirname, '..', 'csv', '3.1 football.csv.csv');

const csvReader = new CsvReader(filePath);

const matchReader = new MatchReader(csvReader);
matchReader.load();

console.log(matchReader.getTotalWinCount('Man United'));
