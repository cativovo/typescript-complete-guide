import { MatchData } from './interfaces/MatchData';
import { Analyzer } from './interfaces/Analyzer';
import { OutputTarget } from './interfaces/OutputTarget';

export class Summary {
  constructor(private analyzer: Analyzer<MatchData>, private outputTarget: OutputTarget) {}
}
