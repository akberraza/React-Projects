import React from 'react'
import { Input,  Space } from 'antd'
import TodoButton from './TodoButton'

function TodoInput({input, setinput, addTodo }) {
  return (
    <Space style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>

    <Input 
       placeholder='Add todo...'
       value={input}
       onChange={(e)=> setinput(e.target.value)}
       onPressEnter={addTodo}
    />

    <TodoButton addTodo={addTodo} />

    </Space>
  )
}

export default TodoInput