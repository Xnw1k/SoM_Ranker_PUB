import { useReducer } from "react";
import { Ctx } from "./Context";
import { RankState, Week } from "./Interfaces";
import { reducer } from "./reducer";
import { createWeek } from "../Utils/Formula/createWeek";

const INITIAL_STATE: RankState = {
  rank: 13,
  percent: 50,
  weeks: [createWeek(13, 50, 0)],
  brackets: [0],
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setRank = (rank_number: number) => dispatch({ type: "set_rank", payload: { rank_number } });
  const setPercent = (slider_number: number) => dispatch({ type: "set_percent", payload: { slider_number } });
  const setBracket = (bracket_number: number) => dispatch({ type: "set_bracket", payload: { bracket_number } });
  const setWeeks = (newWeeks: Week[]) => dispatch({ type: "set_weeks", payload: { newWeeks } });

  const handleBracketChanges = (bracket_index: number, week_index: number) => {
    const newBrackets = [...state.brackets];
    newBrackets[week_index] = bracket_index;
    dispatch({ type: "set_updated_brackets", payload: { newBrackets } });
  };

  const handleDeleteChanges = (week_index: number, bracket_index: number) => {
    const bracketSnapshot = state.brackets.slice();
    const weekSnapshot = state.weeks.slice();
    bracketSnapshot.splice(bracket_index, 1);
    weekSnapshot.splice(week_index, 1);
    dispatch({
      type: "set_updated_weeks",
      payload: { updatedWeeks: weekSnapshot, updatedBrackets: bracketSnapshot },
    });
  };

  return (
    <Ctx.Provider
      value={{
        state,
        setRank,
        setPercent,
        setBracket,
        handleBracketChanges,
        handleDeleteChanges,
        setWeeks,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};
