import Image from "next/image";
import Link from "next/link";

const PostCard = ({ blogpost, index }) => {
  return ( 
    <article key={index} className="
      relative max-w-full h-full bg-background rounded-lg shadow-md
    ">
      <Link
        href={blogpost.blogURL}
        target="_blank" rel="noopener noreferrer"
        className="h-full max-w-full"
      >

        {/* responsive image container : */}
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

        {/* Other post data : */}
        <div className="h-fit px-4 pt-3 pb-8">
          <h2
            className="h-fit font-bold mb-1"
          >
            {blogpost.title}
          </h2>
          <div className="
            absolute bottom-3 w-[calc(100%-2rem)] h-fit
            mt-auto flex text-xs
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