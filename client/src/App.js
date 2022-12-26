import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

//COMPONENTS
import Header from './components/Header';
import Banner from './components/Banner';

//REDUX
import { useDispatch } from 'react-redux';
import { getTheme } from './state/globalSlice';

const App = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(false);

  //THEME DISPATCH
  useEffect(() => {
    dispatch(getTheme(theme));
  }, [theme]);

  return (
    <div className={theme ? styles.app : styles.light}>
      <Header setTheme={setTheme} />
      <Banner />
    </div>
  );
};

export default App;
