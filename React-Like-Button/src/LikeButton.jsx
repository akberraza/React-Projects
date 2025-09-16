import React, { useState } from 'react'
import LikeIcon from './Components/LikeIcon';
import LikeCount from './Components/LikeCount';
import { Card } from 'antd'

function LikeButton() {

  const [liked, setliked] = useState(false);
  const [count, setcount] = useState(0);


  const toggleLike = () =>{
     if(liked){
      setliked(false);
      setcount(0);
      
   }else{
      setliked(true);
      setcount(count + 1);
     }
  }

  return (
    <div 
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'grey'
    }}>

  <Card 
  style={{
   width: 400,
   textAlign: 'center',
   padding: '30px 20px',
   borderRadius: '12px',
   boxShadow: '0 6px 18px rgba(0,0,0,0.2)'
  }}>
      <LikeIcon liked={liked} onToggle={toggleLike} />
      <LikeCount count={count} />

  </Card>

    </div>
  )
}

export default LikeButton