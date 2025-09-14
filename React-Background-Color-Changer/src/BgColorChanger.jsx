import React, { useState } from 'react';
import { Card } from 'antd';
import ColorDisplay from './Components/ColorDisplay'
import ColorButton from './Components/ColorButton';

function BgColorChanger() {

  const [bgColor, setbgColor] = useState("Grey");

  const changeColor = () => {
     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
     setbgColor(randomColor);
  }

  return (
    <div 
    style={{
      height: '100vh',
      background: bgColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

    <Card 
    style={{
      width: 350,
      textAlign: 'center',
      padding:  "20px",
      borderRadius: '12px',
      background: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
    }}>
      <ColorDisplay bgColor={bgColor} />
      <ColorButton onChange={changeColor} />
    </Card>

    </div>
  )
}

export default BgColorChanger