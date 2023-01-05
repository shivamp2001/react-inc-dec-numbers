import {  useState} from 'react';
import './component/text.css'
function App() {
const[num,setnum]=useState(0)
const incrementNO=()=>{
let incNO=num+1
setnum(incNO)
}
const decrementNO=()=>{
  if(num>0){
  let decNO=num-1
  setnum(decNO)
  }
  }
  return (
  <>
 <div className="main_div">
  <div className='center_div'>
    <h1>{num}</h1>
    <div className='btn_div'>
         <button onClick={incrementNO}>Increm</button>
       <button  onClick={decrementNO}>Decrem</button>

    </div>

  </div>
   
 </div>
 </>
  )
}



export default App;
