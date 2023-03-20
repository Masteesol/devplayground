import { forwardRef } from "react";
import { Navbar } from "flowbite-react";

const Nav = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Navbar fluid={true} rounded={true} className="w-full">
        <Navbar.Brand>
          <span>Dev Playground</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/editor">Editor</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
});

export default Nav;
