import { RankState, Week } from './Interfaces';

type TActions =
    | { type: 'set_rank', payload: { rank_number: number } }
    | { type: 'set_percent', payload: { slider_number: number } }
    | { type: 'set_bracket', payload: { bracket_number: number } }
    | { type: 'set_updated_brackets', payload:{ newBrackets: number[] }}
    | { type: 'set_weeks', payload:{ newWeeks: Week[] }}

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
        case 'set_updated_brackets':
            return {
                ...state,
                brackets: action.payload.newBrackets,
            }
        case "set_weeks":
            return {
                ...state,
                weeks: action.payload.newWeeks,
            };
        default:
            return state;
    }

}