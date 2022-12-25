import React from 'react';

//MUI
import Grid from '@mui/material/Grid';
import { MaterialUISwitch } from '../MUI/MUItoggle';

//CSS
import styles from './Component.module.css';

const Header = ({ setTheme }) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}></Grid>
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
