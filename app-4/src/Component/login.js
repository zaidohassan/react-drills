import React from 'react';

export default function Login(props) {
  return (
            <button onClick={( 
                () => props.update()
            )}
            > Login
            </button>
  )
}

   // <select onChange={((e) => props.update(e.target.value)) }
    // disabled={ props.allowEdit === "false" }
    //   className="dropDownContainer ml0"
    // >
    //   <option value="true"> Allow Edit </option>
    //   <option value="false"> Disable Edit </option>
    // </select>