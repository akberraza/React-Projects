import React from 'react'
import { List, Checkbox, Button } from 'antd'

function TodoList({todos, toggleDone, removeTodo}) {

  if(todos.length === 0) {
    return <p style={{color: '#888', marginTop: 10}}>No todos</p>
  }

  return (
     
    <List 
       bordered
       style={{marginTop: 15}}
       dataSource={todos}
       renderItem={
        (t) =>(
          <List.Item 
             actions={[
              <Button danger size='small' onClick={() => removeTodo(t.id)}>
                Delete
              </Button>
             ]}
          >

            <Checkbox 
               checked={t.done}
               onChange={() => toggleDone(t.id)}
               style={{marginRight: 8}}
            />

            <span
               style={{
                textDecoration: t.done ? 'line-through' : 'none', flex: 1
               }}
            >
              {t.text}
            </span>

          </List.Item>
        )
       }
    
    />

  )
}

export default TodoList