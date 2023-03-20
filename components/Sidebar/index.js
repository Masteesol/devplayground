import { useState } from "react";
import { Sidebar, Button } from "flowbite-react";
import { EditIcon, HomeIcon, VerticalMenuIcon } from "../icons";

const SidebarElement = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={isOpen ? "h-0" : ""}>
      {isOpen ? (
        <Button
          onClick={toggleSidebar}
          color="light"
          className="m-2 absolute bottom-5 md:top-0 z-50 border-none shadow"
        >
          <VerticalMenuIcon color="black" />
        </Button>
      ) : null}
      <div className={isOpen ? "w-0 overflow-hidden" : "h-full"}>
        <Sidebar aria-label="Default sidebar example" className="w-[5rem]">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/" icon={HomeIcon} className="flex-col">
                Home
              </Sidebar.Item>
              <Sidebar.Item href="/editor" icon={EditIcon} className="flex-col">
                Editor
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
          <Button
            onClick={toggleSidebar}
            color="light"
            className="w-full flex justify-center mt-4"
          >
            <VerticalMenuIcon color="black" />
          </Button>
        </Sidebar>
      </div>
    </div>
  );
};

export default SidebarElement;
