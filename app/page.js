
import PostCard from "@/components/PostCard";
import Nav from "@/components/Nav";

export default function Home() {
  return ( <>

    {/* nav / tab bar component (vertical on desktop, horizontal on mobile) : */}
    <Nav />

    <main className="
      sm:w-[calc(100%-4rem)]
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

          {/* blog posts are fetched, incl error handling */}
          {fetch('https://api.tiimoapp.com/api/static/blogposts.json')
            .then((response) => {
              if (response.status >= 400 && response.status < 500) {
                throw new Error('There was a problem receiving the content. Refreshing might help.');
              }
              else if (!response.ok) {
                throw new Error('There was an error on the server, try again later.');
              }
              return response.json()
            })
            .then((data) =>
              data.map((blogpost, index) => (
                <PostCard key={index} blogpost={blogpost} />
              ))
            )
            .catch((error) => (
              <p>Error fetching blog posts: {error.message}</p>
            ))}
        </div>
      </div>
    </main>
  </> );
}
