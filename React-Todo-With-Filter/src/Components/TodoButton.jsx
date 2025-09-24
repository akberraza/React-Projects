import React from 'react'
import { Button } from 'antd'

function TodoButton({addTodo}) {
  return (
     <Button type='primary' onClick={addTodo}>
        Add
     </Button>
)
}

export default TodoButton