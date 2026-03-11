import profilePicture from "../assets/Stuart.webp";
import useFollow from "../hooks/useFollow";
import useBio from "../hooks/useBio";
import usePopularity from "../hooks/usePopularity";

const StatItem = ({ label, value }) => (
  <article className="flex flex-col items-center">
    <span className="font-bold text-l">{value}</span>
    <p className="font-medium text-xs">{label}</p>
  </article>
);

export function ProfileInfo({ userData }) {
  // Modul Follow
  const { isFollowing, followerCount, toggleFollow } = useFollow(
    userData.stats.followers,
    userData.username,
  );

  // Modul Bio
  const { bioValue, handleBioChange, maxLength } = useBio(userData.bio);

  // Modul Popularity
  const popularity = usePopularity(followerCount);

  return (
    <>
      <section className="w-full flex flex-col items-center px-3 py-3">
        {/* UserName */}
        <div className="">
          <h1 className="text-md font-bold py-2">{userData.username}</h1>
        </div>

        {/* Popularity */}
        <div className="bg-gray-100 px-3 py-1 rounded-full mb-4">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
            {popularity}
          </span>
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
            <StatItem label="Posts" value={userData.stats.posts} />
            <StatItem label="Followers" value={followerCount} />
            <StatItem label="Following" value={userData.stats.following} />
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col justify-start w-full mt-5 gap-0.5">
          <label htmlFor="bio-input" className="font-bold text-xs">
            {userData.name}
          </label>
          <textarea
            name="bio"
            id="bio-input"
            className="text-xs"
            value={bioValue}
            onChange={handleBioChange}
          />

          {/* Indikator karakter bio */}
          <div className="flex justify-end">
            <span
              className={`text-[10px] ${maxLength - bioValue.length < 10 ? "text-red-600 font-bold" : "text-gray-400"}`}>
              {bioValue.length} / {maxLength}
            </span>
          </div>

          <a href="" className="text-xs text-blue-950">
            {userData.website}
          </a>
        </div>

        {/* Button */}
        <div className="flex w-full mt-4 gap-2">
          {!isFollowing ? (
            <button
              onClick={toggleFollow}
              className={`w-full py-2 font-bold text-xs border rounded-sm ${isFollowing ? "bg-gray-200 border-gray-400" : "bg-blue-500 text-white border-transparent"}`}>
              Follow
            </button>
          ) : (
            <>
              <button
                onClick={toggleFollow}
                className="w-full py-2 font-bold text-xs bg-gray-200 border border-gray-400 rounded-sm">
                Following
              </button>

              <button
                className="w-full py-2 font-bold text-xs bg-gray-200 border border-gray-400 rounded-sm"
                onClick={() => console.log("Membuka pesan...")}>
                Message
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}
