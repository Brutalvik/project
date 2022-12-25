import React from 'react';

//MUI
import Grid from '@mui/material/Grid';
import { MaterialUISwitch } from '../UI/MUItoggle';

//CSS
import styles from './Component.module.css';

//UI
import MenuBar from '../UI/MenuBar';
import Logo from './Logo';

const Header = ({ setTheme }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Logo />
        </Grid>
        <Grid item xs={6}>
          <MenuBar>
            <div className={styles.menuitem}>Home</div>
            <div className={styles.menuitem}>Tentang</div>
            <div className={styles.menuitem}>Persyaratan</div>
            <div className={styles.menuitem}>Testimoni</div>
          </MenuBar>
        </Grid>
        <Grid item xs>
          <div className={styles.toggle_button}>
            <MaterialUISwitch
              sx={{ m: 1 }}
              onClick={(event) => setTheme(event.target.checked)}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
