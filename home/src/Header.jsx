import React from 'react';
import { Link } from 'react-router-dom';

import MiniCart from 'cart/MiniCart';
import Login from 'cart/Login';

export default function Header() {
  return (
    <>
      <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
        <div className="flex">
          <div className="flex-grow">
            <Link to="/">Shapes World</Link>
            <span className="mx-5">|</span>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="flex-end relative">
            <MiniCart />
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
