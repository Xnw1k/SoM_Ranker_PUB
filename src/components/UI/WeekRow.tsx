import React from "react";
import { STARTING_DAY, ENDING_DAY, getWeekInfo, RenderSelect } from "../../Utils/Weeks";
import { BiTrash } from "react-icons/bi";
import { Week } from "../../Store/Interfaces";
import { SelectItem } from "./SelectItem";
import { useCtx } from "../../Store/useCtx";

export const WeekRow = ({ index, week }: { index: number; week: Week }) => {
  const { brackets, handleBracketChanges, handleDeleteChanges } = useCtx();
  return (
    <div className="week-item" key={index}>
      <div className="week-table">
        <div className="table-item">
          {index === 0 && <span className="table-subs">Week:</span>}
          {STARTING_DAY.plus({ weeks: index }).toLocaleString({ month: "short", day: "numeric" })} -{" "}
          {ENDING_DAY.plus({ weeks: index }).toLocaleString({ month: "short", day: "numeric" })}
        </div>
        <div className="table-item">
          {index === 0 && <span className="table-subs">starting at:</span>}
          Rank: {week.starting.rank} - {week.starting.percent}%
        </div>
        <div className="table-item">
          {index === 0 && <span className="table-subs">finishing at:</span>}
          Rank: {week.ending.rank} - {week.ending.percent}%
        </div>
        {/* <aside style={{ flex: ".8" }}>{RenderSelect(week, index, handleBracketChanges)}</aside> */}
        <aside style={{ flex: ".8" }}>
          <SelectItem week={week} index={index} handleBracketChanges={handleBracketChanges} />
        </aside>
        {index === 0 && (
          <span className="table-icon" style={{ color: "rgba(234,234,234,1)" }}>
            <span className="table-icon-del none" />
          </span>
        )}
        {index !== 0 && (
          <span className="table-icon" onClick={() => getWeekInfo(index, brackets, handleDeleteChanges)}>
            <span className="table-icon-del" />
          </span>
        )}
      </div>
    </div>
  );
};
