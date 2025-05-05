// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from '@mui/icons-material/Delete';
// import "./Todo.css";
// import {
//   createTodo,
//   updateTodo,
//   deleteTodo,
//   deleteAllTodos,
// } from "../../redux/features/TodoSlice";

// const Todo = () => {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   const [newTodo, setNewTodo] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTodo, setCurrentTodo] = useState(null);

//   const handleCreateTodo = (e) => {
//     e.preventDefault();
//     if (newTodo.trim()) {
//       dispatch(createTodo(newTodo));
//       setNewTodo("");
//     }
//   };

//   const handleEditTodo = (todo) => {
//     setIsEditing(true);
//     setCurrentTodo(todo);
//   };

//   const handleUpdateTodo = () => {
//     if (currentTodo.text.trim()) {
//       dispatch(updateTodo(currentTodo));
//       setIsEditing(false);
//       setCurrentTodo(null);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>TO DO LIST</h1>

//       <form onSubmit={handleCreateTodo}>
//         <input
//           type="text"
//           value={newTodo}
//           className="input"
//           placeholder="Create a new todo..."
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button className="addButton" type="submit">
//           ADD
//         </button>
//       </form>
//       <ul className="taskList">
//         {todos.map((todo) => (
//           <li key={todo.id} className="listItem">
//             {todo.text}
//             <div className="setting">
//               <EditIcon onClick={() => handleEditTodo(todo)}/>
//                 <DeleteIcon onClick={() => dispatch(deleteTodo(todo.id))}/>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <button className="deleteAll" onClick={() => dispatch(deleteAllTodos())}>
//         Delete All
//       </button>

//       {isEditing && (
//         <div className="modal">
//           <div>
//             <h2>Todo Edit</h2>
//             <input
//               type="text"
//               value={currentTodo.text}
//               onChange={(e) =>
//                 setCurrentTodo({ ...currentTodo, text: e.target.value })
//               }
//             />
//             <button className="save" onClick={handleUpdateTodo}>Save</button>
//             <button onClick={() => setIsEditing(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Todo;
