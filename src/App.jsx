import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

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

  // const isLoggedIn = true;

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Pintu Utama */}
          <Route path="/login" element={<LoginPage />} />

          {/* Pintu Khusus */}
          <Route
            path="/profile"
            element={<ProfilePage userData={user} allPosts={allPosts} />}
          />

          {/* Jika nyasar */}
          <Route path="*" element={<div>Halaman tidak ditemukan</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
