import React from 'react'
import { useCtx } from '../Store/useCtx'
import { Brackets } from '../Utils/Brackets';
import Select from 'react-select'

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
        neutral70: 'black', // idk?
        neutral80: 'rgba(68,68,68,1);', //placeholder text
        neutral90: 'rgba(234,234,234,1);',
    }
});

export const style = {
    control: (base: any) => ({
        ...base,
        border: '1px solid rgba(234,234,234,1);',
        // This line disable the blue border
        boxShadow: 'none'
    })
};


export const Weeks:React.FC = () => {
    const {weeks, setBracket, handleBracketChanges} = useCtx();
    if(!weeks) return null;

    let selectOptions = Brackets.map((bracket, index) => ({
        value: index,
        label: bracket.name
    }))

    return (
        <>
        <div className="week">
            {weeks.map((week, index) => {
                let bracketName = week.bracket + 1 
                return (
                    <div className="week-item" key={index}>
                        <span className="index"> {index+1}</span>
                        <div className="week-table">
                            <div  className="table-item">Rank: {week.starting.rank} {week.starting.percent}%</div>
                            <div className="table-item">Rank: {week.ending.rank} {week.ending.percent}%</div>
                            <aside style={{flex:'.7'}}>
                                <Select
                                    options={selectOptions}
                                    defaultValue={selectOptions[0]}
                                    isSearchable={false}
                                    styles={style}
                                    theme={customStyles}
                                    value={{ value: week.bracket, label:  `Bracket ${week.bracket+1}`}} // figure out a way to not make this display 0, aka change create function/update function
                                    onChange={(option: any) => handleBracketChanges(option.value, index)}
                                />
                            </aside>
                        </div>
                    </div>
                )
            })}
            <br/>
        </div>
        <button onClick={() => setBracket(0)}>Add Week</button>
        </>
    )
}
