import React, { useState } from "react";
import CheckBox from "./CheckBox";
export default function App () {
  const checkList = [...Array(5).fill("체크").map((v, i) => v + i)]
  const [checkItems, setCheckItems] = useState(new Set)
  const [isAllChecked, setIsAllChecked] = useState(false);

  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkItems.add(id)
      setCheckItems(checkItems)
    } else if (!isChecked) {
      checkItems.delete(id)
      setCheckItems(checkItems)
    }
    console.log(isChecked, checkItems)
  }

  const allCheckedHandler = ({target}) => {
    if (target.checked) {
      setCheckItems(new Set(checkList.map((checkbox, index) => `id`+index)))
      setIsAllChecked(true)
    } else {
      checkItems.clear();
      setCheckItems(checkItems);
      setIsAllChecked(false)
    }
    console.log(`allCheck = `, target.checked)
  }

  return (
    <>
    <header>
      <label>
        <input type="checkbox" onChange={(e) => allCheckedHandler(e)} />
        전체선택
      </label>
    </header>
    <div>
      {
        checkList.map((text, index) => (
          <CheckBox key={index} text={text} id={`id`+index} checkItemHandler={checkItemHandler} isAllChecked={isAllChecked}/>
        ))
      }
    </div>
    <ul>
    
    </ul>
    </>
  )
}