import React, { useEffect, useState } from "react";

const useBio = (initialBio, maxLength = 150) => {
  const [bioValue, setBioValue] = useState(initialBio);

  const handleBioChange = (e) => {
    const value = e.target.value;

    if (value.length <= maxLength) {
      setBioValue(value);
    }
  };

  useEffect(() => {
    // Debouncing
    const timer = setTimeout(() => {
      if (bioValue !== initialBio) {
        console.log("Bio sedang diperbarui...");
      }
    }, 2000);

    // CleanUp
    return () => clearTimeout(timer);
  }, [bioValue, initialBio]);

  return { bioValue, handleBioChange, maxLength };
};

export default useBio;
