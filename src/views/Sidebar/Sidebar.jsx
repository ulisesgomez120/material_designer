import React, { useState } from "react";
import "./Sidebar.css";
import SidebarItem from "./components/SidebarItem";

const Sidebar = ({ materials, selectMaterial }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* button content comes from css toggle-button::before */}
      <button className='toggle-button' onClick={toggleSidebar}></button>
      <div className='content'>
        {materials &&
          materials.map((material) => (
            <SidebarItem key={material.id} item={material} selectMaterial={selectMaterial} />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
