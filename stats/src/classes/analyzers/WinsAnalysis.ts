/* eslint-disable max-len */
import { Analyzer } from '../../interfaces/Analyzer';
import { MatchData } from '../../interfaces/MatchData';
import { MatchResult } from '../../MatchResult';

export class WinsAnalysis implements Analyzer<MatchData> {
  constructor(private _team: string) {}

  get team(): string {
    return this._team;
  }

  run(data: MatchData[]): string {
    const wins = data.reduce((totalWins: number, match: MatchData): number => {
      const isTeamHomeWinner = match.homeTeam === this._team && match.winner === MatchResult.HomeWin;
      const isTeamAwayWinner = match.awayTeam === this._team && match.winner === MatchResult.AwayWin;
      const didWin = isTeamHomeWinner || isTeamAwayWinner;

      return didWin ? totalWins + 1 : totalWins;
    }, 0);

    return `${this._team} won ${wins} game${wins > 1 || wins < 1 ? 's' : ''}`;
  }
}
