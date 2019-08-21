import path from 'path';
import { MatchReader } from './classes/readers/MatchReader';
import { CsvReader } from './classes/readers/CsvReader';
import { WinsAnalysis } from './classes/analyzers/WinsAnalysis';
import { ConsoleReport } from './classes/reportTargets/ConsoleReport';
import { Summary } from './classes/Summary';
import { MatchData } from './interfaces/MatchData';

const filePath = path.join(__dirname, '..', 'csv', '3.1 football.csv.csv');

const csvReader = new CsvReader(filePath);
const matchReader = new MatchReader(csvReader);
matchReader.load();

const analyzer = new WinsAnalysis('Man United');
const outputTarget = new ConsoleReport();
const summary = new Summary<MatchData>(analyzer, outputTarget);
summary.buildAndPrintReport(matchReader.matches);
