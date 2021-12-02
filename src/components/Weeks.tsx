import React from 'react'
import { useCtx } from '../Store/useCtx'
import { Brackets } from '../Utils/Brackets';
import Select from 'react-select'

export const customStyles = (defaultReactSelectTheme: any) => ({
    ...defaultReactSelectTheme,
    colors: {
        text: '#425563',
        primary: '#425563;', //active
        neutral0: '#151a21;', //dark
        primary25: '#425563;', //active
        neutral20: '#425563',
        neutral30: '#425563',
        neutral40: '#425563',
        neutral50: '#425563',
        neutral60: '#425563',
        neutral70: '#425563',
        neutral80: '#9CA3AF',
        neutral90: '#425563',
    }
});

export const style = {
    control: (base: any) => ({
        ...base,
        border: '1px solid #425563',
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
        <div className="week">
            {weeks.map((week, index) => {
                let bracketName = week.bracket + 1 
                return (
                    <div className="week-item" key={index}>
                        <span>{index+1}</span>
                        <div className="week-table">
                            <div>Rank: {week.starting.rank} {week.starting.percent}%</div>
                            <div>Rank: {week.ending.rank} {week.ending.percent}%</div>
                            {/* <select onChange={(e) => {
                                handleBracketChanges(+e.target.value, index);
                                console.log(e.target.value);
                            }}>
                                {Brackets.map((b, i) => {
                                    return (
                                        <option key={i} value={i}>{b.name} - {b.rp}rp</option>
                                    )
                                })}
                            </select> */}
                            <Select
                                options={selectOptions}
                                defaultValue={selectOptions[0]}
                                isSearchable={false}
                                styles={style}
                                theme={customStyles}
                                value={{ value: week.bracket, label:  `Bracket`}} // figure out a way to not make this display 0, aka change create function/update function
                                onChange={(option:any) => handleBracketChanges(option.value, index)}
                            />
                        </div>
                    </div>
                )
            })}
            <br/>
            <button onClick={() => setBracket(0)}>Add Week</button>
        </div>
    )
}
