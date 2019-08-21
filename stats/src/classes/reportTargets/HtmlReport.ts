import fs from 'fs';
import path from 'path';
import { OutputTarget } from '../../interfaces/OutputTarget';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const reportDirectory = path.join(__dirname, '..', '..', '..', 'report');
    const fileDirectory = path.join(reportDirectory, 'report.html');

    if (!fs.existsSync(reportDirectory)) fs.mkdirSync(reportDirectory);

    const output = `
        <div>
            <h1>Analysis Report</h1>
            <h3>${report}</hr>
        </div>
    `;

    fs.writeFileSync(fileDirectory, output);
  }
}
