import React, { useState } from 'react'
import { Card } from 'antd'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList';
import TodoTabs from './Components/TodoTabs';

function TodoWithFilter() {

  const [input, setinput] = useState('');
  const [todos, settodos] = useState([]);
  const [filter, setfilter] = useState('all');


  const addTodo = () => {
      const t = input.trim();
      if(!t) return;
      settodos((prev) => [{ id: Date.now(), text: t, done: false }, ...prev]);
      setinput('');
  }

  const removeTodo = (id) => settodos((prev) => prev.filter((t) => t.id !== id));

  const toggleDone = (id) => {
     settodos((prev) => 
      prev.map((t) =>  (t.id === id ? {...t, done: !t.done} : t))
    )
  }



  const  filterd = todos.filter((t)=>{
    if(filter === 'active') return !t.done;
    if(filter === 'complete') return t.done;
    return true;
  })
  

  return (
    <div style={{textAlign: 'center'}}>

      <h1 style={{marginTop: '100px'}}>Todo App</h1>

      <Card
        title='Todo App (with Filter)'
        style={{
            maxWidth: 500,
            margin: '0 auto',
            borderRadius: 10,
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            padding: 20,
        }}
      >

        <TodoInput input={input} setinput={setinput} addTodo={addTodo} />
        <TodoTabs filter={filter} setfilter={setfilter} />
        <TodoList todos={filterd} toggleDone={toggleDone} removeTodo={removeTodo} />


      </Card>

    </div>
  )
}

export default TodoWithFilter