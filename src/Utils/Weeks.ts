import { Brackets } from './Brackets';
import { DateTime } from 'luxon';

export let SELECT_OPTIONS = Brackets.map((bracket, index) => ({value: index,label: bracket.name}));
export let STARTING_DAY = DateTime.local().set({ weekday: 2 });
export let ENDING_DAY = STARTING_DAY.plus({ weeks: 1 });

export const getWeekInfo = (week_index: number, brackets: number[], handleDeleteChanges: (week_index: number, findBracketPosition: number) => void): void => {
    const bracketPosition = brackets[week_index]
    const findBracketPosition = brackets.indexOf(bracketPosition);        
    handleDeleteChanges(week_index, findBracketPosition);
}
