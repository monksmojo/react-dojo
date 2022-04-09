import {useState} from 'react'
function Counter(){
    const[currentCounter,counterHandler]=useState(0)

    function incrementCounterHandler(){
        let counterValue=currentCounter
        counterHandler(counterValue+1)
    }

    function decrementCounterHandler(){
        let counterValue=currentCounter
        counterHandler(counterValue-1)
    }

    return (
      <>
        <h2>the counter value : {currentCounter}</h2>
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <button onClick={decrementCounterHandler}>Increment Counter</button>
      </>
    );
}

export default Counter;