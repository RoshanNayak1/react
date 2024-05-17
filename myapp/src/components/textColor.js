import React, { useState } from "react";

function TextColor(){
    const [increase ,setIncrease] = useState(true);

    function Change(){
        setIncrease(!increase)
    }
    return(
        <>
        
        <h1 style={{ color :increase ? "red" : "green"}}> this is text</h1>
        <button onClick={Change}> change</button>
        </>
    )
}

export default TextColor;