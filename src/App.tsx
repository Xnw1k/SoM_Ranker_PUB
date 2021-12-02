import React from 'react'
import './App.scss'
import { useCtx } from './Store/useCtx'
import { Ranks } from './Utils/Data'
import { Slider } from './components/Slider'
import { Weeks } from './components/Weeks'
import { createWeek } from './Utils/Formula/createWeek'
import { Header } from './components/Header'
import { Title } from './components/Title'

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
    <div className="page">
      <Header />
      <Title>
        You've currently selected: Rank {rank} - {percent}%
      </Title>
        <div className="grid">
        {Ranks.map((r, index) => {
          if(r.number === 14) return null;
          let active = rank === r.number;
          return (
              <div className={`grid-item ${active ? 'active' : ''}`} onClick={() => setRank(r.number)} key={index}>
            <img src={r.img} alt={'classic wow ranking'}/>
            <h2>
            Rank {r.number}
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
