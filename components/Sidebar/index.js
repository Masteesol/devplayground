import { useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { EditIcon, HomeIcon, VerticalMenuIcon } from "../icons";
import tw from "tailwind-styled-components";

const ToggleButton = tw.button`
    border-none 
    shadow 
    p-3
    md:p-4 
    bg-white
    rounded-md
    hover:bg-gray-100
`;

const SidebarElement = ({ isOpen, setIsOpen, toggleSidebar }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isOpen ? (
        <ToggleButton onClick={toggleSidebar} className="m-2">
          <VerticalMenuIcon color="black" />
        </ToggleButton>
      ) : null}
      <div className={isOpen ? "hidden" : "h-full"}>
        <Sidebar aria-label="Default sidebar example" className="w-[5rem]">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/"
                icon={HomeIcon}
                className="flex-col text-xs"
              >
                Home
              </Sidebar.Item>
              <Sidebar.Item
                href="/editor"
                icon={EditIcon}
                className="flex-col text-xs"
              >
                Editor
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
          <ToggleButton
            onClick={toggleSidebar}
            color="light"
            className="w-full flex justify-center mt-4"
          >
            <VerticalMenuIcon color="black" />
          </ToggleButton>
        </Sidebar>
      </div>
    </div>
  );
};

export default SidebarElement;
