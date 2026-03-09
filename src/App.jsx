import "./App.css";
import Navbar from "./components/Navbar";
import { PostGrid } from "./components/PostGrid";
import { Profile } from "./components/ProfileInfo";

function App() {
  const user = {
    username: "stuart_minion",
    name: "Stuart",
    stats: { posts: 10, followers: 10, following: 5 },
    bio: "Banana! Papoy gelato ti amo bakar bapple? Tulaliloo tipee! nasi goreng",
    website: "www.stuart-minion.com",
  };

  const allPosts = [
    "https://picsum.photos/400?random=1",
    "https://picsum.photos/400?random=2",
    "https://picsum.photos/400?random=3",
    "https://picsum.photos/400?random=4",
    "https://picsum.photos/400?random=5",
    "https://picsum.photos/400?random=6",
    "https://picsum.photos/400?random=7",
    "https://picsum.photos/400?random=8",
    "https://picsum.photos/400?random=9",
  ];

  return (
    <>
      <div className="h-screen flex flex-col gap-3">
        <section className=" top-0">
          <Profile userData={user} />
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
}

export default App;
