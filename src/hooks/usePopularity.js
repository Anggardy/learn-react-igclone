import React, { useMemo } from "react";

const usePopularity = (count) => {
  const level = useMemo(() => {
    console.log("Jumlah follower sedang dihitung...");

    if (count > 50) return "Influencer";
    if (count > 10) return "Rising Star";
    return "Newcomer";
  }, [count]);

  return level;
};

export default usePopularity;
