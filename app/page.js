
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {fetch('https://api.tiimoapp.com/api/static/blogposts.json')
        .then((response) => response.json())
        .then((data) =>
          data.map((blogpost, index) => (
            <Link
              key={index} href={blogpost.blogURL}
              target="_blank" rel="noopener noreferrer"
            >
              <Image
                src={blogpost.imageURL}
                alt="blogpost thumbnail"
                width={300}
                height={200}
              />
              <h3>{blogpost.title}</h3>
              <span>Read now →</span>
            </Link>
          ))
        )}
    </main>
  );
}
