
import TabButton from "./TabButton";
import rightNow from "@/public/icons/right-now.svg";
import Plan from "@/public/icons/plan.svg";
import Me from "@/public/icons/me.svg";

const Nav = () => {
  return ( 
    <nav className="
      fixed bottom-0 left-0 right-0
      w-screen h-16
      
      sm:top-0 sm:right-auto
      sm:h-screen sm:w-16
      
      outline-[2px] outline outline-lightGray
      bg-background z-10
      
      flex px-9 justify-between text-xs font-bold text-center

      sm:flex-col sm:px-1 sm:justify-start sm:gap-4 sm:pt-14
    ">
      <TabButton
        label="Right now" source={rightNow} alt="button for 'right now'"
      />
      <TabButton
        label="Plan" source={Plan} alt="button for 'Plan'"
      />
      <TabButton
        label="Me" source={Me} alt="button for 'Me'"
      />
    </nav>
   );
}
 
export default Nav;