import React from 'react';
import { useState } from 'react';
function AgeCalculate(){
    const [age,setAge] = useState(0)

    function IncrementFun(){
            setAge(age+1)
    }
    return(
        <>
        {age} <br></br>

        <button onClick={IncrementFun}> increment</button>
        </>
           
        
    )
}
export default AgeCalculate;