import React from 'react'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

const TodoList = ({ todos, toggleComplete, editTodo }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          index={index + 1}
          todo={todo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
