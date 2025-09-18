import React from 'react'
import { Input } from 'antd'
const {TextArea} = Input

function TextAreaInput({text, settext}) {
  return (
    <TextArea 
      value={text}
      onChange={(e)=>settext(e.target.value)}
       rows={5}
       placeholder='Type somethings...'
       style={{fontSize: '16px'}}
    />

  )
}

export default TextAreaInput