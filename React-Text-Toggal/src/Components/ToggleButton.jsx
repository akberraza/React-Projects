import React from 'react'
import { Button } from 'antd'

function ToggleButton({isVisible, onToggle}) {
  return (
    <Button type='primary' onClick={onToggle} >
      {isVisible ? 'Hide Text' : 'Show Text' }
      </Button>
  )
}

export default ToggleButton