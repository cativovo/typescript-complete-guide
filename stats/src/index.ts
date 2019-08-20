import path from 'path';
import { CsvFileReader } from './CsvFileReader';

const filePath = path.join(__dirname, '..', 'csv', '3.1 football.csv.csv');

const csvFileReader = new CsvFileReader(filePath);
csvFileReader.read();

const matches = csvFileReader.data;
console.log(matches);
