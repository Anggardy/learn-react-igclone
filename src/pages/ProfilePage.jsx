import { ProfileInfo } from "../components/ProfileInfo";
import { PostGrid } from "../components/PostGrid";
import { Navbar } from "../components/Navbar";

const ProfilePage = ({ userData, allPosts }) => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <section className=" top-0">
          <ProfileInfo userData={userData} />
        </section>
        <main className="flex-1 overflow-y-auto">
          <PostGrid posts={allPosts} />
        </main>
        <nav className="sticky bottom-0 bg-white">
          <Navbar />
        </nav>
      </div>
    </>
  );
};

export default ProfilePage;
