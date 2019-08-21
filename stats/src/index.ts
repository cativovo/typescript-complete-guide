import path from 'path';
import { CsvReader } from './classes/readers/CsvReader';
import { WinsAnalysisReportGenerator } from './classes/reportGenerators/WinsAnalysisReportGenerator';

const filePath = path.join(__dirname, '..', 'csv', '3.1 football.csv.csv');
const reader = new CsvReader(filePath);
const reportGenerator = new WinsAnalysisReportGenerator(reader);

reportGenerator.generateConsoleReport('Man United');
