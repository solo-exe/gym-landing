import NavBar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import OurClasses from "./scenes/ourClasses";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTopOfPage(false);
      } else setIsTopOfPage(true);
    };

    // always add event listener when using window object
    window.addEventListener("scroll", handleScroll);
    // Unmounting
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="app bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage as SelectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />

      {/* <div className="content">
        {Array.from({ length: 50 }, (_, index) => (
          <div
            key={index}
            className="item bg-white p-4 m-2 border rounded shadow"
          >
            Item {index + 1}
          </div>
        ))}
      </div> */}
    </div>
  );
}
