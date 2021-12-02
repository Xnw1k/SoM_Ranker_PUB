import { RankState } from './Interfaces';

type TActions =
    | { type: 'set_rank', payload: { rank_number: number } }
    | { type: 'deleteTodo', payload: { id: number } }

export const reducer = (state: RankState, action: TActions): RankState => {
    switch (action.type) {
        case 'set_rank':
            return {
                ...state,
                rank: action.payload.rank_number,
            }
        default:
            return state;
    }

}