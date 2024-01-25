import React, { useState } from "react";
import "./Sidebar.css";
import SidebarItem from "./components/SidebarItem";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className='toggle-button' onClick={toggleSidebar}>
        {/* {isOpen ? "Close" : "Open"} */}
      </button>
      <div className='content'>
        <SidebarItem item={{ title: "Title", content: "Content" }} />
      </div>
    </div>
  );
};

export default Sidebar;
