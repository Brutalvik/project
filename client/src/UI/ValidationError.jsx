import React from 'react';
import styles from './UI.module.css';

const ValidationError = ({ isError, isTouched, errorMessage }) => {
  return (
    <>
      {isError && isTouched && (
        <p className={styles.error_message}>{errorMessage}</p>
      )}
    </>
  );
};

export default ValidationError;
