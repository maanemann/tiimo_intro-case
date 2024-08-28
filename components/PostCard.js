import Image from "next/image";
import Link from "next/link";

const PostCard = ({ blogpost, index }) => {
  return ( 
    <article key={index} className="
      bg-background rounded-lg shadow-md max-w-full
    ">
      <Link
        href={blogpost.blogURL}
        target="_blank" rel="noopener noreferrer"
        className="grid h-full max-w-full"
      >
        <div className="
          aspect-[2/1] max-w-full
          relative overflow-hidden
        ">
          <Image
            src={blogpost.imageURL}
            alt="blogpost thumbnail"
            fill sizes="
              (max-width: 639px) 100vw, (max-width: 1023px) 50vw,
              (max-width: 1535px) 33vw, 25vw
            "
            className="
              absolute object-cover
              max-w-full rounded-t-lg
            "
          />
        </div>
        <div className="flex flex-col h-full px-4 py-3">
          <h2
            className="font-bold mb-1 flex-grow-0"
          >
            {blogpost.title}
          </h2>
          <div className="
            w-full min-h-full mt-auto self-end flex text-xs
          ">
            <span>Author</span>
            <div className="
              mx-2 w-[2px] h-4 bg-lightGray
            "/>
            <span>Timestamp</span>
            <span className="ml-auto">
              Read now →
            </span>
          </div>
        </div>
      </Link>
    </article>
   );
}
 
export default PostCard;