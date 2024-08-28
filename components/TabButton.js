
import Image from "next/image";
import Link from "next/link";

const TabButton = ({ label, source, alt }) => {

  return (
    <Link href="#" className="
      flex flex-col justify-center items-center gap-1 leading-tight
    ">
      <Image src={source} alt={alt} />
      {/* in a real scenario we would instead check the URL */}
      <p className={
        label === "Right now" ? "text-textPrimary" : "text-inactive"
      }>
        {label}
      </p>
    </Link>
  );
}

export default TabButton;