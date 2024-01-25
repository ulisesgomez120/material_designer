import React from "react";

const SidebarItem = ({ item }) => {
  return (
    <div className='sidebar-item'>
      <div className='sidebar-item__active_section'></div>
      <div className='sidebar-item__content'>
        <h3>{item.title}</h3>
        <p>action buttons</p>
      </div>
    </div>
  );
};

export default SidebarItem;
