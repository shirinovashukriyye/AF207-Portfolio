import React, { useReducer, useState } from 'react';
import UserModal from './UserModal';
import './App.css'

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map(user =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    case 'DELETE':
      return state.filter(user => user.id !== action.payload);
    case 'RESET':
      return [];
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleCreate = () => {
    if (!name || !surname) return;
    dispatch({
      type: 'CREATE',
      payload: { id: Date.now(), name, surname },
    });
    setName('');
    setSurname('');
  };

  const handleEditClick = user => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleModalSave = updatedUser => {
    dispatch({ type: 'UPDATE', payload: updatedUser });
    setModalOpen(false);
    setEditingUser(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Surname"
        value={surname}
        onChange={e => setSurname(e.target.value)}
      />
      <button onClick={handleCreate}>Add</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Clear all</button>

      <ul>
        {state.map(user => (
          <li key={user.id}>
            {user.name} {user.surname}{' '}
            <button onClick={() => handleEditClick(user)}>Edit</button>
            <button onClick={() => dispatch({ type: 'DELETE', payload: user.id })}>
              Sil
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && editingUser && (
        <UserModal
          user={editingUser}
          onClose={() => setModalOpen(false)}
          onSave={handleModalSave}
        />
      )}
    </div>
  );
}

export default App;
