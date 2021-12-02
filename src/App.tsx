import React from 'react'
import './App.css'
import { useCtx } from './Store/useCtx'
import { Ranks } from './Utils/Data'
import { Slider } from './components/Slider'
import { Weeks } from './components/Weeks'
import { createWeek } from './Utils/Formula/createWeek'

export const App:React.FC = () => {
  const { rank, setRank, percent, brackets, setWeeks} = useCtx();

  React.useEffect(() => {
    update();
  }, [brackets, percent, rank]);

  const update = () => {
    const firstWeek = createWeek(rank, percent, brackets[0]);
    const otherWeeks = [];
    const weekCount = brackets.length;
    let prevWeek = firstWeek;
    for (let i = 1; i < weekCount; i++) {
      const week = createWeek(prevWeek.ending.rank, prevWeek.ending.percent, brackets[i]);
      otherWeeks.push(week);
      prevWeek = week;
    }
    setWeeks([firstWeek, ...otherWeeks]);
  };

  return (
    <div>
      currently selected rank: {rank} {percent}%
      <br /><br />
      <div className="grid">
       {Ranks.map((rank, index) => {
         if(rank.number === 14) return null;
         return (
          <div className="grid-item" onClick={() => setRank(rank.number)} key={index}>
          <img src={rank.img} alt={'classic wow ranking'}/>
          <h2>
          Rank {rank.number}
          </h2>
          </div>
         )
       })}
      </div>
      <Slider />
      <Weeks />
    </div>
  )
}
