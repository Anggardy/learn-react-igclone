import "./App.css";
import Navbar from "./components/navbar";
import { PostGrid } from "./components/postGrid";
import { Profile } from "./components/profileInfo";

function App() {
  const userData = {
    username: "stuart_minion",
    name: "Stuart",
    bio: "Banana! Papoy gelato ti amo bakar bapple? Tulaliloo tipee! nasi goreng",
    postCount: 10,
  };

  return (
    <>
      <div className="h-screen flex flex-col gap-3">
        <section className=" top-0">
          <Profile
            username={userData.username}
            name={userData.name}
            bio={userData.bio}
            posts={userData.postCount}
          />
        </section>
        <main className="flex-1 overflow-y-auto">
          <PostGrid />
        </main>
        <nav className="sticky bottom-0 bg-white">
          <Navbar />
        </nav>
      </div>
    </>
  );
}

export default App;
