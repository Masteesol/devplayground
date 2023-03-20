import React from "react";
import { Sidebar } from "flowbite-react";
import { CalculatorIcon, EditIcon, HomeIcon } from "../icons";
const SidebarElement = () => {
  return (
    <div>
      <Sidebar aria-label="Default sidebar example" className="w-[6rem]">
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
      </Sidebar>
    </div>
  );
};

export default SidebarElement;
