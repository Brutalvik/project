import React, { useState } from 'react';
import styles from './App.module.css';

//COMPONENTS
import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div className={theme ? styles.app : styles.light}>
      <Header setTheme={setTheme} />
    </div>
  );
};

export default App;
