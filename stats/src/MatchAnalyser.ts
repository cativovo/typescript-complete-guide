import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils/dateStringToDate';
import { MatchResult } from './MatchResult';

interface MatchData {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  winner: MatchResult;
  referee: string;
}

export class MatchAnalyser extends CsvFileReader {
  // Yung mga private properties naguumpisa sa '_' yung convention
  private _matches: MatchData[] = [];

  constructor(filename: string) {
    super(filename);

    this.read();

    this._matches = this.data.map(
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

  get matches(): MatchData[] {
    return this._matches;
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
