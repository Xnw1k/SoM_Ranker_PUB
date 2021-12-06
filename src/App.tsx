import "./App.scss";
import React from "react";
import { useCtx } from "./Store/useCtx";
import { Ranks } from "./Utils/Data";
import { RangeSlider } from "./components/Slider";
import { Weeks } from "./components/Weeks";
import { createWeek } from "./Utils/Formula/createWeek";
import { Header } from "./components/UI/Header";
import { Title } from "./components/UI/Title";
import "rc-slider/assets/index.css";

export const App: React.FC = () => {
  const { rank, setRank, percent, brackets, setWeeks } = useCtx();

  React.useEffect(() => {
    updateWeeks();
  }, [brackets, percent, rank]);

  const updateWeeks = () => {
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
        Selected a rank & percentage: Rank {rank} - {percent}%
      </Title>
      <div className="grid">
        {Ranks.map((r, index) => {
          if (r.number === 14) return null;
          let active = rank === r.number;
          return (
            <div className={`grid-item ${active ? "active" : ""}`} onClick={() => setRank(r.number)} key={index}>
              <img src={r.img} alt={"classic wow ranking"} />
              <h3>Rank {r.number}</h3>
              <div className="titles">
                <ul>
                  <li className={`${active ? "horde" : ""}`}>{r.title.horde}</li>
                  <li className={`${active ? "alliance" : ""}`}>{r.title.alliance}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <RangeSlider />
      <Weeks />
    </div>
  );
};
