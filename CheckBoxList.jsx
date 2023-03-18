import React, { useState } from "react";
import CheckBox from "./CheckBox";
export default function App () {
  const checkList = [
    {
      id: '체크1',
    }, 
    {
      id: '체크2',
    }, 
    {
      id: '체크3',
    }, 
    {
      id: '체크4',
    }, 
  ]

  const [checkItems, setCheckItems] = useState([])

  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckItems((prev) => [...prev, id])
    } else {
      console.log('not')
      setCheckItems(checkItems.filter((item) => item !== id))
    }
    console.log(checkItems)
  }

  const allCheckedHandler = (e) => {
    if (e.target.checked) { 
      setCheckItems(checkList.map((item) => item.id))
    } else {
      setCheckItems([]);
    }
    console.log(`allCheck = `, e.target.checked)
  }

  return (
    <>
    <header>
      <label>
        <input type="checkbox" onChange={allCheckedHandler} 
          checked={checkItems.length === checkList.length ? true : false}/>
        전체선택
      </label>
    </header>
    <div>
      {
        checkList.map((item) => (
          <CheckBox key={item.id} id={item.id} checkItemHandler={checkItemHandler}
            checked={checkItems.includes(item.id) ? true : false} />
        ))
      }
    </div>
    <ul>
    
    </ul>
    </>
  )
}