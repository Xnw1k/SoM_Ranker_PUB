import { useReducer } from 'react';
import { Ctx } from './Context';
import { RankState } from './Interfaces';
import { reducer } from './reducer';

const createWeek = (one: number, two: number, three: number) => 0;

const INITIAL_STATE: RankState = {
    rank: 13,
    percent: 1,
    weeks: [createWeek(13,1,0)],
    brackets: []
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props ) => {
    const [state, dispatch] = useReducer( reducer, INITIAL_STATE );

    const setRank = ( rank_number: number ) => {
        dispatch({ type: 'set_rank', payload: { rank_number } });
    }

    const setPercent = ( slider_number: number ) => {
        dispatch({ type: 'set_percent', payload: { slider_number } });
    }

    return (
        <Ctx.Provider value={{
            state,
            setRank,
            setPercent,
        }}>
            { children }
        </Ctx.Provider>
    )
}