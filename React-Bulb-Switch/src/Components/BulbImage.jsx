import React from 'react'

function BulbImage({isOn}) {
  return (
    <img src={
      isOn 
      ?  "https://cdn-icons-png.flaticon.com/512/702/702797.png"  
      : "https://cdn-icons-png.flaticon.com/512/702/702814.png" 
    } alt="" width='120' />
  )
}

export default BulbImage