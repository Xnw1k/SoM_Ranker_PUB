import { createContext } from "react";
import { RankState } from './Interfaces';

export interface ICtx{
    state: RankState,
    setRank: (rank_number: number) => void,
    setPercent: (slider_number: number) => void,
    setBracket: (bracket_number: number) => void,
}

export const Ctx = createContext<ICtx>({} as ICtx);