import profilePicture from "../assets/Stuart.webp";

export function Profile({ userData }) {
  return (
    <>
      <section className="w-full flex flex-col items-center px-3">
        <div className="">
          <h1 className="text-md font-bold py-2">{userData.username}</h1>
        </div>

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
              <span className="font-bold text-l">
                {userData.stats.followers}
              </span>
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

        <div className="flex flex-col justify-start w-full mt-5 gap-0.5">
          <h3 className="font-bold text-xs">{userData.name}</h3>
          <p className="text-xs">{userData.bio}</p>
          <a href="" className="text-xs text-blue-950">
            {userData.website}
          </a>
        </div>

        <div className="flex w-full mt-4">
          <button className="border border-gray-400 rounded-sm w-full py-2 font-bold text-xs">
            Edit Profile
          </button>
        </div>
      </section>
    </>
  );
}
