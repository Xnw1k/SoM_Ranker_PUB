import { createContext } from "react";
import { RankState, Week } from './Interfaces';

export interface ICtx{
    state: RankState,
    setRank: (rank_number: number) => void,
    setPercent: (slider_number: number) => void,
    setBracket: (bracket_number: number) => void,
    handleBracketChanges: (bracket_index: number, week_index: number) => void,
    setWeeks: (newWeeks: Week[]) => void,
    handleDeleteChanges: (week_index: number, bracket_index: number) => void,
}

export const Ctx = createContext<ICtx>({} as ICtx);