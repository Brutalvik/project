import React from 'react';

//CSS
import styles from './Component.module.css';

//ASSET
import light from '../assets/light.png';
import dark from '../assets/dark.png';

//REDUX
import { useSelector } from 'react-redux';

const Logo = () => {
  const theme = useSelector((state) => console.log(state));

  return (
    <div>
      <img src={theme ? dark : light} alt='logo' className={styles.logo} />
    </div>
  );
};

export default Logo;
