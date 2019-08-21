import { DataReader } from '../../interfaces/DataReader';
import { MatchData } from '../../interfaces/MatchData';
import { WinsAnalysis } from '../analyzers/WinsAnalysis';
import { MatchReader } from '../readers/MatchReader';
import { ConsoleReport } from '../reportTargets/ConsoleReport';
import { HtmlReport } from '../reportTargets/HtmlReport';
import { Summary } from '../Summary';

export class WinsAnalysisReportGenerator {
  private _matchReader: MatchReader;
  constructor(reader: DataReader) {
    this._matchReader = new MatchReader(reader);
    this._matchReader.load();
  }

  generateConsoleReport(team: string): void {
    const analyzer = new WinsAnalysis(team);
    const outputTarget = new ConsoleReport();
    const summary = new Summary<MatchData>(analyzer, outputTarget);
    summary.buildAndPrintReport(this._matchReader.matches);
  }

  generateHtmlReport(team: string): void {
    const analyzer = new WinsAnalysis(team);
    const outputTarget = new HtmlReport();
    const summary = new Summary<MatchData>(analyzer, outputTarget);
    summary.buildAndPrintReport(this._matchReader.matches);
  }
}
