import React from "react";
import { FaFileExport, FaTrash } from "react-icons/fa6";

const SidebarItem = ({ item }) => {
  return (
    <div className='sidebar-item'>
      <div className='sidebar-item__active_section'></div>
      <div className='sidebar-item__content'>
        <h3>{item.title}</h3>
        <hr />
        <div className='sidebar-item__action_btns'>
          <FaFileExport className='sidebar-item__icon' />
          <FaTrash className='sidebar-item__icon' />
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
