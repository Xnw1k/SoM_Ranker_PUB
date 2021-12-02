import { RankState } from './Interfaces';

type TActions =
    | { type: 'set_rank', payload: { rank_number: number } }
    | { type: 'set_percent', payload: { slider_number: number } }
    | { type: 'set_bracket', payload: { bracket_number: number } }

export const reducer = (state: RankState, action: TActions): RankState => {
    switch (action.type) {
        case 'set_rank':
            return {
                ...state,
                rank: action.payload.rank_number,
            }
        case 'set_percent':
            return {
                ...state,
                percent: action.payload.slider_number,
            }
        case 'set_bracket':
            return {
                ...state,
                brackets: [...state.brackets, action.payload.bracket_number]
            }
        default:
            return state;
    }

}