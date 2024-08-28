
import PostCard from "@/components/PostCard";
import Nav from "@/components/Nav";

export default function Home() {
  return ( <>
    <Nav />
    <main className="
      w-[calc(100%-4rem)]
      ml-auto
    ">
      <div className="
        p-7 py-14
      ">
        <h1 className="
          text-3xl font-bold mb-7
        ">
          Blog posts
        </h1>
        <div className="
          grid grid-flow-row grid-cols-1 gap-5
          sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
        ">
          {fetch('https://api.tiimoapp.com/api/static/blogposts.json')
            .then((response) => response.json())
            .then((data) =>
              data.map((blogpost, index) => (
                <PostCard key={index} blogpost={blogpost} />
              ))
            )}
        </div>
      </div>
    </main>
  </> );
}
