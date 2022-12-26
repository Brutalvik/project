import React from 'react';

//MUI
import Grid from '@mui/material/Grid';
import { MaterialUISwitch } from '../UI/MUItoggle';

//COMPONENTS
import MenuBar from '../UI/MenuBar';
import Logo from './Logo';
import Contact from './Contact';

//CSS
import styles from './Component.module.css';

//REDUX
import { useSelector } from 'react-redux';

const Header = ({ setTheme }) => {
  const theme = useSelector((state) => state.global.theme);
  const dark = styles.menuitem_dark;
  const light = styles.menuitem_light;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Logo />
        </Grid>
        <Grid item xs={6}>
          <MenuBar>
            <div className={theme ? dark : light}>Home</div>
            <div className={theme ? dark : light}>Tentang</div>
            <div className={theme ? dark : light}>Persyaratan</div>
            <div className={theme ? dark : light}>Testimoni</div>
          </MenuBar>
        </Grid>
        <Grid item xs={2}>
          <div className={styles.contact}>
            <Contact />
          </div>
          <div className={styles.switch}>
            <MaterialUISwitch
              sx={{ m: 1 }}
              onClick={(event) => setTheme(event.target.checked)}
              className={styles.toggle_button}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
