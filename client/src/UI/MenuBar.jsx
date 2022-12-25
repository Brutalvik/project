import React from 'react';

//CSS
import styles from './UI.module.css';

const MenuBar = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MenuBar;
