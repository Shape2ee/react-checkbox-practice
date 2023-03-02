import React, { useEffect, useState } from "react";
export default function CheckBox({text, id, checkItemHandler, isAllChecked}) {
  const [checked, setChecked] = useState(false);

  const checkHandled = ({target}) => {
    console.log('checkHandled')
    setChecked(!checked);
    checkItemHandler(target.id, target.checked);
  }
  
  const allCheckHandler = () => setChecked(isAllChecked);
  useEffect(() => allCheckHandler(), [isAllChecked])

  return (
    <label>
      <input id={id} type="checkbox" checked={checked} onChange={(e) => checkHandled(e)}/>
      {text}
    </label>
  )
}