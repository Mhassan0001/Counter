import {React, useState} from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  let t= new Date().toLocaleTimeString(); 

  const [first, setfirst] = useState(0);
  const [time, settime] = useState(t)



  function hi() {
    const t= new Date().toLocaleTimeString(); 
    settime(t)
  }
  setInterval(hi,0.1)


  function reset() {

    if(first>0)
    {
      setfirst(0);
     toast.success('counter is empty',{
      position :"top-right",theme:"colored"
     })

    }

    else{
      toast.warning('Counter Is Already Empty',{position :"top-center",theme:'dark'});
    }
    
    
  }
 

  function inc() {
     setfirst(first+1)
  }

  function dec(){
    if(first>0){
      setfirst(first-1);
    }
  
    else{
      setfirst(0)
      toast.error('You Reached On Final Stage',{theme:"colored"
    });
    }

  }

  return (
   <>

   <div className='cirle'>

    <div className='app'>
    <h1 className='time1'>{time}</h1>
    <p className='name'>counter</p>
      </div>


    <div className='center'> 
     
     <p className='no'>{first}</p>
     <div className='inside'>
     <button className='btn' onClick={inc}>increment</button> 
     <button className='btn1' onClick={dec}>decrement</button>
     </div>
    
  <div className='resetbtn'>
  <button className='colo' onClick={reset} >{<DeleteOutlineIcon />}</button>
    </div>

    </div>

    <ToastContainer />
   </div>
   
   </>
  )
}

export default App