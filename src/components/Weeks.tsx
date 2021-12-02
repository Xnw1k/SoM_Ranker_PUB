import React from 'react'
import { useCtx } from '../Store/useCtx'
import { Brackets } from '../Utils/Brackets';

export const Weeks:React.FC = () => {
    const {weeks, setBracket, handleBracketChanges} = useCtx();
    if(!weeks) return null;

    return (
        <div className="week">
            {weeks.map((week, index) => {
                return (
                    <div className="week-item" key={index}>
                        <div>starting: {week.starting.rank} {week.starting.percent}%</div>
                        <div>ending: {week.ending.rank} {week.ending.percent}%</div>
                        <select onChange={(e) => {
                            handleBracketChanges(+e.target.value, index);
                            console.log(e.target.value);
                        }}>
                            {Brackets.map((b, i) => {
                                return (
                                    <option key={i} value={i}>{b.name} - {b.rp}rp</option>
                                )
                            })}
                        </select>
                    </div>
                )
            })}
            <button onClick={() => setBracket(0)}>add another week</button>
        </div>
    )
}
