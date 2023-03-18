import React from "react";
export default function CheckBox({id, checked, checkItemHandler}) {
  const checkHandled = (e) => {
    console.log('checkHandled')
    checkItemHandler(e.target.id, e.target.checked);
  }

  return (
    <label>
      <input id={id} type="checkbox" checked={checked} onChange={checkHandled}/>
      {id}
    </label>
  )
}