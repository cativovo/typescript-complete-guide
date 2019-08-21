import { DataReader } from '../../interfaces/DataReader';
import { MatchResult } from '../../MatchResult';
import { dateStringToDate } from '../../utils/dateStringToDate';
import { MatchData } from '../../interfaces/MatchData';

export class MatchReader {
  private _matches: MatchData[] = [];

  constructor(private _reader: DataReader) {}

  get matches(): MatchData[] {
    return this._matches;
  }

  load(): void {
    this._reader.read();

    this._matches = this._reader.data.map(
      (row: string[]): MatchData => {
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
