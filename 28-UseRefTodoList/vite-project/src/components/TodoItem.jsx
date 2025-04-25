import React, { useState } from 'react'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo, index, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editText)
    }
    setIsEditing(!isEditing)
  }

  const textColor = todo.completed ? styles.green : styles.red
  const textDecoration = todo.completed ? styles.strikethrough : ""

  return (
    <li className={`${styles.item} ${textColor}`}>
      <span>{index}.</span>
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className={textDecoration}>{todo.text}</span>
      )}
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "Back" : "Ok"}
      </button>
      {!todo.completed && (
        <button onClick={handleEdit}>
          {isEditing ? "Yadda saxla" : "Edit"}
        </button>
      )}
    </li>
  )
}

export default TodoItem
