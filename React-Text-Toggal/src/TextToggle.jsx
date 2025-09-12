import React, { useState } from 'react'
import ToggleButton from './Components/ToggleButton'
import ToggleText from './Components/ToggleText';
import { Card } from 'antd';


function TextToggle() {

  const [isVisible, setisVisible] = useState(false);

  const handleToggle = () => setisVisible(!isVisible);

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    }}>

    <Card 
    style={{
      width: 400,
      textAlign: 'center',
      padding: '30px 20px',
      borderRadius: '18px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
    }}>

      <ToggleButton isVisible={isVisible} onToggle={handleToggle} />

      <ToggleText isVisible={isVisible} />
    </Card>

    </div>
  )
}

export default TextToggle