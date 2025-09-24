import React from 'react'
import { Tabs } from 'antd'

function TodoTabs({filter, setfilter}) {

  const items = [
    {key: 'all', label: 'All'},
    {key: 'active', label: 'Active'},
    {key: 'complete', label: 'Complete'}
  ]

  return (
     <Tabs 
        activeKey={filter}
        onChange={(key) => setfilter(key)}
        items={items}
        style={{marginTop: 20}}
     />
  )
}

export default TodoTabs