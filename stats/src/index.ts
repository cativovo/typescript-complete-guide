import path from 'path';
import { MatchReader } from './MatchReader';

const filePath = path.join(__dirname, '..', 'csv', '3.1 football.csv.csv');

const matchReader = new MatchReader(filePath);
matchReader.read();
console.log(matchReader.getTotalWinCount('Man United'));
