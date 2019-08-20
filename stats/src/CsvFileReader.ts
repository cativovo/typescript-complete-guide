import fs from 'fs';
import { dateStringToDate } from './utils/dateStringToDate';
import { MatchResult } from './MatchResult';

interface Match {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  winner: MatchResult;
  referee: string;
}

// Sync reader
export class CsvFileReader {
  data: Match[] = [];

  constructor(private filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, 'utf-8')
      .split('\n')
      .map((line: string): string[] => line.split(','))
      .map(
        (row: string[]): Match => {
          const [date, homeTeam, awayTeam, homeGoals, awayGoals, winner, referee] = row;

          return {
            date: dateStringToDate(date),
            homeTeam,
            awayTeam,
            homeGoals: parseInt(homeGoals, 10),
            awayGoals: parseInt(awayGoals, 10),
            winner: winner as MatchResult,
            referee,
          };
        },
      );
  }
}
