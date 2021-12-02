import React from 'react'
import './App.css'
import { useCtx } from './Store/useCtx'

export const App:React.FC = () => {
  const { rank, setRank} = useCtx();
  console.log(rank);
  let test = [0,1,2,3,4];
  return (
    <div>
      {rank}

      {test.map(v => <li onClick={() => setRank(v)} key={v}>{v}</li>)}
    </div>
  )
}
