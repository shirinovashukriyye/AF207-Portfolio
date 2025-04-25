import React, { useState } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = ({ addTodo, deleteAllTodos }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Əlavə et</button>
      <button type="button" onClick={deleteAllTodos}>Hamısını sil</button>
    </form>
  )
}

export default TodoForm
