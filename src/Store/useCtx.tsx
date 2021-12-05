import { useContext } from "react";
import { Ctx } from "./Context";

export const useCtx = () => {
  const { state, setRank, setPercent, setBracket, handleBracketChanges, setWeeks, handleDeleteChanges } = useContext(Ctx);
  const { rank, percent, weeks, brackets } = state;

  return {
    rank,
    percent,
    brackets,
    weeks,
    setRank,
    setPercent,
    handleBracketChanges,
    handleDeleteChanges,
    setBracket,
    setWeeks,
  };
};
