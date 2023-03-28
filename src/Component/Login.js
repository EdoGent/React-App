import React from 'react';
import FormHook from './FormHook';

const Login = () => {
  const [formValues, handleInputChange] = FormHook();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('username:', formValues.username);
    console.log('password:', formValues.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formValues.username} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formValues.password} onChange={handleInputChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;


