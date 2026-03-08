import "./App.css";
import Navbar from "./components/navbar";
import { PostGrid } from "./components/postGrid";
import { Profile } from "./components/profileInfo";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col gap-3">
        <section className=" top-0">
          <Profile />
        </section>
        <main className="flex-1overflow-y-auto">
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
