import React, { useState } from 'react'
import { Card } from 'antd';
import PaswwordInput from './Components/PaswwordInput';
import VisibilityAlert from './Components/VisibilityAlert';


function PasswordToggle() {

   const [showPassword, setshowPassword] = useState(false)

  return (
    <div style={{textAlign: 'center'}}>
      
          <h1 style={{marginTop: 60}}>Password Toogle</h1>
     
       <Card
          title='🔑 Password Show/Hide'
          style={{
            maxWidth: 400,
            margin : '0 auto',
            padding: 20,
            borderRadius: 15,
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
       >
   
        <PaswwordInput showPassword={showPassword} setshowPassword={setshowPassword} />
        <VisibilityAlert showPassword={showPassword} />
       </Card>
    

    </div>
  )
}

export default PasswordToggle