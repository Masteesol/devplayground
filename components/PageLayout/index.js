import React from "react";
import { FlexColContainer } from "../styled-global-components";
import Nav from "../Nav";

const index = ({ children }) => {
  return (
    <FlexColContainer className="w-full min-h-[100vh] bg-slate-50">
      <Nav />
      <FlexColContainer className="max-w-[1980px] w-full mx-auto px-3 xl:px-10">
        {children}
      </FlexColContainer>
    </FlexColContainer>
  );
};

export default index;
