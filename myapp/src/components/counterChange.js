import React, { useState } from "react";

function CounterChange(){

    let [count , setCount]= useState(0);

    function increase (){
        setCount(count +1)
    }
    function decrease (){
        count > 0 ? setCount(count-1 ) : setCount(0)
    }
    function setdefault (){
        setCount(0)
    }
    
    return(
        <>
        <h1> {count}</h1>
               <button onClick={increase}>Increase</button>
               <button onClick={decrease}>Decrease</button>
               <button onClick={setdefault}>Set 0</button>
        </>
    )
}
export default CounterChange;