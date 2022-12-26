import React from 'react';

//ASSETS
import whatsapp from '../assets/whatsapp.png';

//CSS
import styles from './Component.module.css';

const Contact = () => {
  return (
    <div className={styles.whatsapp_container}>
      <img src={whatsapp} alt='whatsapp' className={styles.whatsapp} />
      <h4 className={styles.contact_text}>Hubungi Kami</h4>
    </div>
  );
};

export default Contact;
