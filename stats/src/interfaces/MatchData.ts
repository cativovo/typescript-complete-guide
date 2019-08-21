import { MatchResult } from '../MatchResult';

export interface MatchData {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  winner: MatchResult;
  referee: string;
}
