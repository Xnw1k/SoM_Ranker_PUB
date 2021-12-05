import { Brackets } from './Brackets';
import { DateTime } from 'luxon';
import Select from 'react-select'
import { Week } from '../Store/Interfaces';

export const customStyles = (defaultReactSelectTheme: any) => ({
    ...defaultReactSelectTheme,
    colors: {
        text: 'rgba(234,234,234,1);',
        primary: 'rgb(68, 68, 68);', //active
        primary25: 'rgba(234,234,234,1);', //active
        neutral0: 'white', //dark
        neutral20: 'rgba(234,234,234,1);', // sidebar
        neutral30: 'rgba(234,234,234,1);',
        neutral40: 'rgba(234,234,234,1);',
        neutral50: 'green', //idk?
        neutral60: 'rgba(68,68,68,1);', //arrow active
        neutral80: 'rgba(68,68,68,1);', //placeholder text
        neutral90: 'rgba(234,234,234,1);',
    }
});

export const style = {
    control: (base: any) => ({
        ...base,
        border: '1px solid rgba(234,234,234,1);',
        boxShadow: 'none'
    })
};

export let SELECT_OPTIONS = Brackets.map((bracket, index) => ({value: index,label: bracket.name}));
export let STARTING_DAY = DateTime.local().set({ weekday: 2 });
export let ENDING_DAY = STARTING_DAY.plus({ weeks: 1 });

export const getWeekInfo = (
    week_index: number, 
    brackets: number[], 
    handleDeleteChanges: (week_index: number, findBracketPosition: number) => void
    ): void => {
    const bracketPosition = brackets[week_index]
    const findBracketPosition = brackets.indexOf(bracketPosition);        
    handleDeleteChanges(week_index, findBracketPosition);
}

export const RenderSelect: Function = (
    week: Week, 
    index: number, 
    handleBracketChanges: (value: number, index:number) => void
    ): JSX.Element => {
    return (
        <>
           <Select
            options={SELECT_OPTIONS}
            defaultValue={SELECT_OPTIONS[0]}
            isSearchable={false}
            styles={style}
            theme={customStyles}
            value={{ value: week.bracket, label:  `Bracket ${week.bracket+1}`}} // figure out a way to not make this display 0, aka change create function/update function
            onChange={({value}: any) => handleBracketChanges(value, index)}
        />
        </>
    )
}