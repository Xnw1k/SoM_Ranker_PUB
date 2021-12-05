import React from 'react'
import { useCtx } from '../Store/useCtx'
import { Title } from './Title';
import { BiTrash } from 'react-icons/bi'
import { RiAddLine } from 'react-icons/ri';
import { STARTING_DAY, ENDING_DAY, getWeekInfo, RenderSelect } from '../Utils/Weeks'

export const Weeks:React.FC = () => {
    const {weeks, setBracket, brackets, handleBracketChanges, handleDeleteChanges} = useCtx();
    if(!weeks) return null;
    
    return (
        <>
        <div className="week">
        <Title>
             Weekly breakdown:
        </Title>
        <p style={{marginTop: '-.5rem', marginBottom: '.5rem'}}>These calculations are based on Blizzards API and are scaled/flattened low-end based on the given values to ensure there's no false-results. We do however recommend
        sticking to your brakcet allocation if you are 99% as it's likely your character has bonus RP built up throughout the weeks and you'll make up the 1%.
        </p>    
            {weeks.map((week, index) => {
                return (
                    <div className="week-item" key={index}>
                        <div className="week-table">
                        <div className="table-item">
                            {index === 0 && <span className="table-subs">Week:</span>}
                            {STARTING_DAY.plus({ weeks: index }).toLocaleString({ month: 'short', day: 'numeric' })}{" "}-{" "}{ENDING_DAY.plus({ weeks: index}).toLocaleString({ month: 'short', day: 'numeric' })}
                            </div>
                            <div className="table-item">
                            {index === 0 && <span className="table-subs">starting at:</span>}
                                Rank: {week.starting.rank} - {week.starting.percent}%
                            </div>
                            <div className="table-item">
                            {index === 0 && <span className="table-subs">finishing at:</span>}
                                Rank: {week.ending.rank} - {week.ending.percent}%
                            </div>
                            <aside style={{flex:'.8'}}>
                                {RenderSelect(week, index, handleBracketChanges)}
                            </aside>
                            {
                                index === 0 && <span className='table-icon' style={{color:'rgba(234,234,234,1)'}}>Remove <BiTrash style={{marginLeft: '.5rem', verticalAlign: 'middle'}}size={20}/></span>
                            }
                            {
                                index !== 0 &&   <span className='table-icon' onClick={() => getWeekInfo(index, brackets, handleDeleteChanges)}>Remove <BiTrash style={{marginLeft: '.5rem', verticalAlign: 'middle'}}size={20}/></span>
                            }

                        </div>
                    </div>
                )
            })}
        </div>
        <div className="btn" onClick={() => setBracket(0)}><p>Add New Week</p><aside><div><RiAddLine size={22} /></div></aside></div>
        </>
    )
}
