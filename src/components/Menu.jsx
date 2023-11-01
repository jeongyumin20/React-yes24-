// Menu.jsx (src)
import React from "react";

export default function Menu() {
  const list = ['종합', '실시간', '일별', '월별/주별', '특가', '스테디'];
  const menuHandler = (e)=>{
    alert('handler')
    // list.map((menu) => {alert(menu);});
  }

  return(
    <>
      {list.map((menu) => (
        <div className="menu" onClick={menuHandler}>{menu}</div>
      ))}
    </>
  );
}