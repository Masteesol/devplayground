import React, { useRef, useEffect } from "react";
import { FlexColContainer } from "../styled-global-components";
import Nav from "../Nav";

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
      <FlexColContainer
        id="main"
        className="max-w-[1980px] w-full mx-auto px-3 xl:px-10 overflow-auto"
      >
        {children}
      </FlexColContainer>
    </FlexColContainer>
  );
};

export default PageLayout;
