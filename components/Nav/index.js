import { Navbar } from "flowbite-react";

const index = () => {
  return (
    <Navbar fluid={true} rounded={true} className="fixed w-full">
      <Navbar.Brand>
        <span>Dev Playground</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/editor">Editor</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default index;
