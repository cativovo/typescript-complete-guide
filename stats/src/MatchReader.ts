import { DataReader } from './DataReader';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils/dateStringToDate';

interface MatchData {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  winner: MatchResult;
  referee: string;
}

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

  getTotalWinCount(team: string): number {
    return this._matches.reduce((totalWins: number, match: MatchData): number => {
      const isTeamHomeWinner = match.homeTeam === team && match.winner === MatchResult.HomeWin;
      const isTeamAwayWinner = match.awayTeam === team && match.winner === MatchResult.AwayWin;
      const didWin = isTeamHomeWinner || isTeamAwayWinner;

      return didWin ? totalWins + 1 : totalWins;
    }, 0);
  }
}
