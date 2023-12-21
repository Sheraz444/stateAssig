import { useState } from "react";


function App(){
  let array= [10,20,30,40];
  let [marks, setmarks]= useState(array)

  function Add(index){
    let newmarks=[...marks];
    newmarks[index]++;
    setmarks(newmarks);
  }
  const Minus= (index)=>{
let newmarks= [...marks];
newmarks[index]--
setmarks(newmarks)
  }

  return(

    <>
<h1>list</h1>
    {marks.map((mark, inde) =>(
      <div>
        <button onClick={()=> Add(inde) }> +</button>
        <span>{mark}</span>
        <button onClick={()=> Minus(inde) }> -</button>
      </div>
    ))}
    </>
  )
}
export default App;