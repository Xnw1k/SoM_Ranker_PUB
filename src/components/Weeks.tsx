import React from "react";
import { useCtx } from "../Store/useCtx";
import { Title } from "./UI/Title";
import { RiAddLine } from "react-icons/ri";
import { WeekRow } from "./UI/WeekRow";

export const Weeks: React.FC = () => {
  const { weeks, setBracket } = useCtx();
  if (!weeks) return null;

  return (
    <>
      <div className="week">
        <Title>Weekly breakdown:</Title>
        {weeks.map((week, index) => (
          <WeekRow key={index} week={week} index={index} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="btn" onClick={() => setBracket(0)}>
          <p>Add New Week</p>
          <aside>
            <div>
              <RiAddLine size={22} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
