import React, { useState } from 'react'
import { Card, Space } from 'antd'
import BulbImage from './Components/BulbImage';
import BulbToggle from './Components/BulbToggle';

function BulbSwitch() {
 
   const [isOn, setisOn] = useState(false);

  return (

    <>
    
     <h1 style={{textAlign: 'center',marginBottom: 40}}>💡 Bulb App</h1>

    <Card style={{
        maxWidth: 500,
        margin: '0 auto',
        padding: 30,
        borderRadius: 15,
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        textAlign: 'center'
    }}>

     <h2>{isOn? '💡 Bulb ON' : '💤 Bulb OFF'}</h2>
     
     <Space style={{marginTop: 20}}>
        <BulbImage isOn={isOn} />
        <BulbToggle isOn={isOn} setisOn={setisOn} />
     </Space>

    </Card>

    </>

  )
}

export default BulbSwitch