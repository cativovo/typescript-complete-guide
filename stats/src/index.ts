import path from 'path';
import { MatchReader } from './classes/readers/MatchReader';
import { CsvReader } from './classes/readers/CsvReader';
import { WinsAnalysis } from './classes/analyzers/WinsAnalysis';

const filePath = path.join(__dirname, '..', 'csv', '3.1 football.csv.csv');

const csvReader = new CsvReader(filePath);
const matchReader = new MatchReader(csvReader);
matchReader.load();
