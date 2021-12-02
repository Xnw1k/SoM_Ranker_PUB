import { useContext } from 'react';
import { Ctx } from './Context';

export const useCtx = () => {

    const { state, setRank, setPercent} = useContext(Ctx);
    const { rank, percent, weeks} = state;

    return {
        rank,
        percent,
        weeks,
        setRank,
        setPercent
    }
}