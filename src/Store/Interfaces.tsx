export type Week = {
  rp: number;
  bracket: number;
  starting: { rank: number; percent: number };
  ending: { rank: number; percent: number };
};

export interface RankState {
  rank: number;
  percent: number;
  weeks: Week[];
  brackets: number[];
}
