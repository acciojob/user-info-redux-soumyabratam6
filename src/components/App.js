import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName,updateEmail } from '../actions';

const App = () => {
  const dispatch = useDispatch()

  // Get current values from the Redux store
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  // Local state for form inputs
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  // Update Redux store as user types
  const handleNameChange = (e) => {
    setInputName(e.target.value);
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div style={{ margin: '50px' }}>
      <h1>User Information</h1>

      <label>Name: </label>
      <input
        type="text"
        value={inputName}
        onChange={handleNameChange}
        placeholder="Enter name"
      />
      <br /><br />

      <label>Email: </label>
      <input
        type="email"
        value={inputEmail}
        onChange={handleEmailChange}
        placeholder="Enter email"
      />
      <br /><br />

      <h3>Current values in store:</h3>
      <p className='output'>Name - Thomas Edward Stark</p>
      <p className='output'>Email - tonystark@starkindustries.com</p> 
      <p className='output'><strong>Name-</strong> {name}</p>
      <p className='output'><strong>Email-</strong> {email}</p>
    </div>
  );
};

export default App;
