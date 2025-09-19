import React from 'react'
import { Input } from 'antd'

function PaswwordInput({showPassword,setshowPassword}) {
  return (
    
      <Input.Password 
           placeholder='Enter Password'
           visibilityToggle={{
              visible: showPassword,
              onVisibleChange: (visible)=> setshowPassword(visible)
           }}
           style={{fontSize: 16}}
      />

  )
}

export default PaswwordInput