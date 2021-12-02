import React from 'react'
import { useCtx } from '../Store/useCtx'
import { Brackets } from '../Utils/Brackets';

export const Weeks:React.FC = () => {
    const {weeks, setBracket, brackets} = useCtx();
    if(!weeks) return null;
    return (
        <div className="week">
            {weeks.map((week, index) => {
                return (
                    <div className="week-item" key={index}>
                        <div key={index}>starting: {week.starting.rank} {week.starting.percent}%</div>
                        <div key={index}>ending: {week.ending.rank} {week.ending.percent}%</div>
                        <select>
                            {Brackets.map((b, i) => {
                                return (
                                    <option value={b.rp}>{b.name}</option>
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
