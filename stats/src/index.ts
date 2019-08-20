import path from 'path';
import { MatchAnalyser } from './MatchAnalyser';

const filePath = path.join(__dirname, '..', 'csv', '3.1 football.csv.csv');

const matchAnalyser = new MatchAnalyser(filePath);
console.log(matchAnalyser.getTotalWinCount('Man United'));
