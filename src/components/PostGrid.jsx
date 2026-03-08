import post from "../assets/posts/3 Minions.jpg";
import grid from "../assets/navbar/grid.png";
import tag from "../assets/navbar/tag.png";

const PostCard = () => {
  return (
    <div className="w-full aspect-square overflow-hidden">
      <img
        src={post}
        alt="post"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export const PostGrid = () => {
  return (
    <>
      <section className="flex-1 flex flex-col justify-start border-t border-gray-400 ">
        <div className="grid grid-cols-2 items-center">
          <div className="flex justify-center border-b-2 border-black py-2">
            <img src={grid} alt="post" className="h-8" />
          </div>
          <div className="flex justify-center py-2">
            <img src={tag} alt="tag" className="h-8 w-8" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </>
  );
};
