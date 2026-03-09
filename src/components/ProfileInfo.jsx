import { useState } from "react";
import profilePicture from "../assets/Stuart.webp";

export function Profile({ userData }) {
  // State Follow
  const [isFollowing, setIsFollowing] = useState(false);
  // State Stats Follower
  const [follower, setFollower] = useState(userData.stats.followers);

  const handleFollow = () => {
    // Update boolean (kebalikan dari nilai sekarang)
    setIsFollowing(!isFollowing);

    // Update angka berdasarkan status follow saat ini
    setFollower((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <>
      <section className="w-full flex flex-col items-center px-3">
        {/* UserName */}
        <div className="">
          <h1 className="text-md font-bold py-2">{userData.username}</h1>
        </div>

        {/* Profile */}
        <div className="flex justify-between w-full">
          <div className="">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-24 rounded-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-4 px-4">
            <article className="flex flex-col items-center">
              <span className="font-bold text-l">{userData.stats.posts}</span>
              <p className="font-medium text-xs">Posts</p>
            </article>
            <article className="flex flex-col items-center">
              <span className="font-bold text-l">{follower}</span>
              <p className="font-medium text-xs">Followers</p>
            </article>
            <article className="flex flex-col items-center">
              <span className="font-bold text-l">
                {userData.stats.following}
              </span>
              <p className="font-medium text-xs">Following</p>
            </article>
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col justify-start w-full mt-5 gap-0.5">
          <h3 className="font-bold text-xs">{userData.name}</h3>
          <p className="text-xs">{userData.bio}</p>
          <a href="" className="text-xs text-blue-950">
            {userData.website}
          </a>
        </div>

        {/* Button */}
        <div className="flex w-full mt-4 gap-2">
          <button className="border border-gray-400 rounded-sm w-full py-2 font-bold text-xs">
            Edit Profile
          </button>

          <button
            onClick={handleFollow}
            className={`w-full py-2 font-bold text-xs border rounded-sm ${isFollowing ? "bg-gray-200 border-gray-400" : "bg-blue-500 text-white border-transparent"}`}>
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </section>
    </>
  );
}
