import home from "../assets/navbar/home.png";
import search from "../assets/navbar/search.png";
import plus from "../assets/navbar/plus.png";
import love from "../assets/navbar/love.png";
import user from "../assets/navbar/user.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <section className="flex justify-between px-8 py-3">
        <Link Pell to="/">
          <img src={home} alt="home" className="h-8" />
        </Link>

        <Link to="/search">
          <img src={search} alt="search" className="h-8" />
        </Link>
        <Link to="/upload">
          <img src={plus} alt="upload" className="h-8" />
        </Link>
        <Link to="/like">
          <img src={love} alt="like" className="h-8" />
        </Link>
        <Link to="/profile">
          <img src={user} alt="profile" className="h-8" />
        </Link>
      </section>
    </>
  );
};
