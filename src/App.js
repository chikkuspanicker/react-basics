import React, { useState } from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';

function App() {
  let [menu, setMenu] = useState(" My App ");
  const menuClick = (text) => {
    setMenu(text);
  }
  return (
    <div className="app-container">
      <Header menuClick={menuClick} />
      <Main content={menu}/>
    </div>
  );
}

export default App;
