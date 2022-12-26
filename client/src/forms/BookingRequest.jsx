import React from 'react';

//MUI
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DatePicker from './DatePicker';
import Button from '@mui/material/Button';

//CSS
import styles from './Forms.module.css';

//HANDLERS
import { labelValues, inialFormValues } from '../model/initialValues.js';

//FORMIK
import { Formik, useFormik } from 'formik';

const BookingRequest = () => {
  const { startLabel, endLabel } = labelValues;
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: inialFormValues,
  });

  //DESTRUCTURES
  const {
    name,
    email,
    phone,
    gender,
    bookingStartDate,
    bookingEndDate,
  } = values;

  console.log('FORM VALUES : ', values);

  return (
    <Formik className={styles.request_container} onSubmit={handleSubmit}>
      <TextField
        id='name'
        label='Name'
        variant='outlined'
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        id='email'
        label='Email'
        variant='outlined'
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        id='phone'
        label='Phone Number'
        variant='outlined'
        value={phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          value={gender}
          onChange={handleChange}
          onBlur={handleBlur}
          name='gender'
        >
          <FormControlLabel
            id='gender'
            value='female'
            control={<Radio />}
            label='Female'
          />
          <FormControlLabel
            id='gender'
            value='male'
            control={<Radio />}
            label='Male'
          />
          <FormControlLabel
            id='gender'
            value='other'
            control={<Radio />}
            label='Other'
          />
        </RadioGroup>
      </FormControl>
      <DatePicker
        label={startLabel}
        value={bookingStartDate}
        onchange={(newDate) => {
          setFieldValue('bookingStartDate', newDate.$d);
        }}
        onBlur={handleBlur}
      />
      <DatePicker
        label={endLabel}
        value={bookingEndDate}
        onchange={(newDate) => {
          setFieldValue('bookingEndDate', newDate.$d);
        }}
        onBlur={handleBlur}
      />
      <Button variant='contained'>Book</Button>
    </Formik>
  );
};

export default BookingRequest;
