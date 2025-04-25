import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { toast } from 'react-toastify'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    if (!text.trim()) {
      toast.error("Boş todo əlavə etmək olmaz!")
      return
    }
    if (todos.some(todo => todo.text === text)) {
      toast.warning("Bu todo artıq mövcuddur!")
      return
    }
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos(prev => [...prev, newTodo])
    toast.success("Yeni todo əlavə olundu!")
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
    toast.info("Todo statusu dəyişdirildi!")
  }

  const editTodo = (id, newText) => {
    if (!newText.trim()) {
      toast.error("Boş dəyərə dəyişmək olmaz!")
      return
    }
    setTodos(prev =>
      prev.map(todo => todo.id === id ? { ...todo, text: newText } : todo)
    )
    toast.success("Todo uğurla dəyişdirildi!")
  }

  const deleteAllTodos = () => {
    setTodos([])
    toast.warn("Bütün todolar silindi!")
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      fontFamily: 'sans-serif'
    }}>
      <h1>📝 Todo List</h1>
      <TodoForm addTodo={addTodo} deleteAllTodos={deleteAllTodos} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  )
}

export default App
