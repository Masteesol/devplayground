import React, { useRef, useEffect } from "react";
import {
  FlexColContainer,
  FlexRowContainer,
} from "../styled-global-components";
import Nav from "../Nav";
import Sidebar from "../Sidebar";

const PageLayout = ({ children }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const navHeight = navRef.current.offsetHeight;
    const main = document.querySelector("#main");
    main.style.height = `calc(100vh - ${navHeight}px)`;
  }, []);
  return (
    <FlexColContainer className="w-full min-h-[100vh] bg-slate-50">
      <Nav ref={navRef} />
      <FlexRowContainer>
        <Sidebar />
        <FlexColContainer id="main" className="w-full overflow-auto">
          <FlexColContainer
            id="main"
            className="max-w-[1980px] h-full w-full mx-auto px-3 xl:px-10"
          >
            {children}
          </FlexColContainer>
        </FlexColContainer>
      </FlexRowContainer>
    </FlexColContainer>
  );
};

export default PageLayout;
