import React from "react";
import { useState } from "react";

function InputChange(){
    const [input , setInput] = useState('');

    function inputvalue(event){
             setInput(event.target.value)
    }
    return(
        <>
        <input type="text" onChange={inputvalue} />
          <p>{input}</p>  
        
        </>
    )
}
export default InputChange;