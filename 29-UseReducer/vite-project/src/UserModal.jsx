import React, { useState } from 'react';
import './UserModal.css'

function UserModal({ user, onClose, onSave }) {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);

  const handleSave = () => {
    onSave({ ...user, name, surname });
  };

  return (
    <div style={{
      position: 'fixed',
      top: '30%',
      left: '30%',
      background: 'white',
      padding: '20px',
      border: '1px solid black',
    }}>
      <h3>Redaktə et</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={surname} onChange={e => setSurname(e.target.value)} />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleSave}>Yadda saxla</button>
        <button onClick={onClose}>Bağla</button>
      </div>
    </div>
  );
}

export default UserModal;
