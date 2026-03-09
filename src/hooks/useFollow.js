/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const useFollow = (initialFollowers, username) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(initialFollowers);
  const [following, setFollowing] = useState(initialFollowers);

  // Handle Follow
  const toggleFollow = () => {
    setIsFollowing((prev) => !prev);
    setFollowerCount((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  useEffect(() => {
    if (isFollowing) {
      console.log("Seseorang baru saja mengikuti " + username);
    }
  }, [isFollowing, username]);

  return { isFollowing, followerCount, toggleFollow };
};

export default useFollow;
