import React, { useRef, useEffect, useState } from "react";
import {
  FlexColContainer,
  FlexRowContainer,
} from "../styled-global-components";
import TopBar from "../TopBar";
import Sidebar from "../Sidebar";

const PageLayout = ({ children }) => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const navHeight = navRef.current.offsetHeight;
    const main = document.querySelector("#main");
    main.style.height = `calc(100vh - ${navHeight}px)`;
  }, []);
  return (
    <FlexRowContainer
      className={
        isOpen
          ? "flex-col w-full min-h-[100vh] bg-slate-50"
          : "w-full min-h-[100vh] bg-slate-50"
      }
    >
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleSidebar={toggleSidebar}
      />
      <FlexColContainer className="w-full">
        <TopBar ref={navRef} />
        <FlexColContainer id="main" className="w-full overflow-auto">
          <FlexColContainer
            id="main"
            className="max-w-[1980px] h-full w-full mx-auto px-2 xl:px-10"
          >
            {children}
          </FlexColContainer>
        </FlexColContainer>
      </FlexColContainer>
    </FlexRowContainer>
  );
};

export default PageLayout;
