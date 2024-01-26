import React from "react";
import { FaFileExport, FaTrash } from "react-icons/fa6";

const SidebarItem = ({ item, selectMaterial }) => {
  function actionBtnHandler(type) {
    if (type === "export") {
      console.log("exporting");
    } else if (type === "delete") {
      console.log("deleting");
    }
  }
  return (
    <div className='sidebar-item' onClick={() => selectMaterial(item)}>
      <div className='sidebar-item__active_section'></div>
      <div className='sidebar-item__content'>
        <h3>{item.name}</h3>
        <hr />
        <div className='sidebar-item__action_btns'>
          <FaFileExport
            className='sidebar-item__icon'
            title='Export to .xyz file'
            onClick={(e) => {
              e.stopPropagation();
              actionBtnHandler("export");
            }}
          />
          <FaTrash
            className='sidebar-item__icon'
            title='Delete material'
            onClick={(e) => {
              e.stopPropagation();
              actionBtnHandler("delete");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
