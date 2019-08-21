import { Analyzer } from '../interfaces/Analyzer';
import { OutputTarget } from '../interfaces/OutputTarget';

export class Summary<T> {
  constructor(private analyzer: Analyzer<T>, private outputTarget: OutputTarget) {}

  buildAndPrintReport(data: T[]): void {
    const output = this.analyzer.run(data);

    this.outputTarget.print(output);
  }
}
