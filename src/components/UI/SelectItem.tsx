import React, { useState } from "react";
import { BRACKET_SELECT_OPTIONS } from "../../Utils/Weeks";
import { Week } from "../../Store/Interfaces";

export const SelectItem: React.FC<{
  week: Week;
  index: number;
  handleBracketChanges: (bracket_index: number, week_index: number) => void;
}> = ({ handleBracketChanges, week, index }): JSX.Element => {
  const def = BRACKET_SELECT_OPTIONS[0].label;
  const [display, setDisplay] = useState(false);
  const [opt, setOpt] = useState(BRACKET_SELECT_OPTIONS[0].label);
  return (
    <div onClick={() => setDisplay(!display)} className="wow_select">
      <span>{opt}</span>
      {display && (
        <div className="wow_select-hidden">
          <ul>
            {BRACKET_SELECT_OPTIONS.map((item, i) => (
              <li
                onClick={() => {
                  setOpt(item.label);
                  handleBracketChanges(item.value, index);
                }}
                key={i}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <span />
        </div>
      )}
    </div>
  );
};
