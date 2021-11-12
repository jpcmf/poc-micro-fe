import React from 'react';
import ReactDOM from 'react-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
