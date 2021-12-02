import { useReducer } from 'react';
import { Ctx } from './Context';
import { RankState } from './Interfaces';
import { reducer } from './reducer';
import { createWeek } from '../Utils/Formula/createWeek'

const INITIAL_STATE: RankState = {
    rank: 13,
    percent: 50,
    weeks: [createWeek(13, 50, 0)],
    brackets: [0]
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props ) => {
    const [state, dispatch] = useReducer( reducer, INITIAL_STATE );

    const setRank = ( rank_number: number ) => dispatch({ type: 'set_rank', payload: { rank_number } });
    const setPercent = ( slider_number: number ) => dispatch({ type: 'set_percent', payload: { slider_number } });
    const setBracket = ( bracket_number: number) => dispatch({ type: 'set_bracket', payload: { bracket_number } })
    
    return (
        <Ctx.Provider value={{
            state,
            setRank,
            setPercent,
            setBracket,
        }}>
            {children}
        </Ctx.Provider>
    )
}