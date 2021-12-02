import React from 'react'
import './App.css'
import { useCtx } from './Store/useCtx'
import { Ranks } from './Utils/Data'

export const App:React.FC = () => {
  const { rank, setRank} = useCtx();
  return (
    <div>
      currently selected rank: {rank}
      <br /><br />
      <div className="grid">
       {Ranks.map(rank => {
         if(rank.number === 14) return null;
         return (
          <div className="grid-item" onClick={() => setRank(rank.number)} key={rank.number}>
          <img src={rank.img} />
          <h2>
          Rank {rank.number}
          </h2>
          </div>
         )
       })}
      </div>
    </div>
  )
}
