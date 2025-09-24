import React from 'react'
import { Button, Tooltip } from 'antd'

function ToggleButton({isVisible, onToggle}) {
  return (
    <Tooltip  title='Click Button'>

    <Button type='primary' onClick={onToggle} >
      {isVisible ? 'Hide Text' : 'Show Text' }
      </Button>

    </Tooltip>
  )
}

export default ToggleButton