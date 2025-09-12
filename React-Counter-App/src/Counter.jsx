import React, { useState } from 'react'
import CounterDisplay from './Components/CounterDisplay'
import CounteButton from './Components/CounteButton'
import { message } from 'antd'

function Counter() {

   const [count, setcount] = useState(0);
   const [messageApi, contextHolder] = message.useMessage();

   const handleIncrement = () =>{
    setcount(count + 1);
    messageApi.success('Increment Successfully.');
   }

   const handleDecrement = () => {
    setcount(count - 1);
    messageApi.success('Decrement Successfully');
   }

   const handleReset = () => {
    setcount(0);
    messageApi.info('Counter is Reset!');
   }


  return (
    <div style={{textAlign: 'center', marginTop: '200px'}}>
      
     {contextHolder}

     <CounterDisplay count={count} />
     <CounteButton 
     count={count}
     onIncrement={handleIncrement}
     onDecrement={handleDecrement}
     onReset={handleReset}
     />

    </div>
  )
}

export default Counter