import { useContext } from 'react';
import { Ctx } from './Context';

export const useCtx = () => {

    const { state, setRank} = useContext(Ctx);
    const { rank } = state;

    return {
        rank,
        setRank
    }
}