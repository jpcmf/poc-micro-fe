import React, { useEffect, useState } from 'react';
import Login from './Login';
import { login, jwt } from './cart';

export default function CartContent() {
  const [token, setToken] = useState('');

  // auto login for tests only
  useEffect(() => {
    //   login('tony', '123');
    return jwt.subscribe((val) => setToken(val ?? ''));
  }, []);

  return (
    <>
      <div>JWT: {token}</div>
      <Login />
    </>
  );
}
