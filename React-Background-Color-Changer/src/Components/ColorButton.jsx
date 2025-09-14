import React from 'react'
import { Button } from 'antd'

function ColorButton({onChange}) {
  return (
   <Button danger size='large' onClick={onChange}>
    Change Background
   </Button>
  )
}

export default ColorButton