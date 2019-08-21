import { OutputTarget } from '../../interfaces/OutputTarget';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
