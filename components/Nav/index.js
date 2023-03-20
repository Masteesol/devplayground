import { forwardRef } from "react";
import { Navbar } from "flowbite-react";

const Nav = forwardRef((props, ref) => {
  console.log(props);
  return (
    <div ref={ref}>
      <Navbar fluid={true} rounded={true} className="w-full">
        <Navbar.Brand>
          <span>Dev Playground</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
});

Nav.displayName = "Nav";

export default Nav;
