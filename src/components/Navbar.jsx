import home from "../assets/navbar/home.png";
import search from "../assets/navbar/search.png";
import plus from "../assets/navbar/plus.png";
import love from "../assets/navbar/love.png";
import user from "../assets/navbar/user.png";

const Navbar = () => {
  return (
    <>
      <section className="flex justify-between px-8 py-4">
        <img src={home} alt="home" className="h-8" />
        <img src={search} alt="search" className="h-8" />
        <img src={plus} alt="plus" className="h-8" />
        <img src={love} alt="love" className="h-8" />
        <img src={user} alt="user" className="h-8" />
      </section>
    </>
  );
};

export default Navbar;
