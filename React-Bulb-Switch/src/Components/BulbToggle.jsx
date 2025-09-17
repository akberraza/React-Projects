import React from 'react'
import { Switch, Tooltip } from 'antd'

function BulbToggle({isOn, setisOn}) {
  return (
    <Tooltip title='Switch Button'>

      <Switch  style={{marginLeft: '20px'}}
          checked={isOn}
          onChange={(checked)=> setisOn(checked)}
          checkedChildren='ON'
          unCheckedChildren='OFF'
      />
    </Tooltip>
  )
}

export default BulbToggle