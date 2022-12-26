import React from 'react';
//LOGICAL FUNCTIONS
import { blockInvalidChar } from '../functions/logicalfunctions';
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
import { useFormik } from 'formik';
import { bookingRequestSchema } from '../schemas/schema';

const onSubmit = (values) => {
  console.log(values);
};

const BookingRequest = () => {
  const { startLabel, endLabel } = labelValues;
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: inialFormValues,
    validationSchema: bookingRequestSchema,
    onSubmit,
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

  console.log('FORM ERRORS : ', errors);

  return (
    <form className={styles.request_container} onSubmit={handleSubmit}>
      <TextField
        error={errors.name && touched.name && true}
        id='name'
        label='Name'
        variant='outlined'
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        error={errors.email && touched.email && true}
        id='email'
        label='Email'
        variant='outlined'
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        error={errors.phone && touched.phone && true}
        id='phone'
        label='Phone Number'
        type='number'
        onKeyDown={blockInvalidChar}
        onInput={({ target }) => {
          target.value = Math.max(0, parseInt(target.value))
            .toString()
            .slice(0, 13);
        }}
        variant='outlined'
        value={phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormControl>
        <FormLabel
          error={errors.gender && touched.gender && true}
          id='demo-radio-buttons-group-label'
        >
          Gender
        </FormLabel>

        <RadioGroup
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
        error={errors.bookingStartDate && touched.bookingStartDate && true}
        label={startLabel}
        value={bookingStartDate}
        onchange={(newDate) => {
          setFieldValue('bookingStartDate', newDate.$d);
        }}
        onBlur={handleBlur}
      />
      <DatePicker
        error={errors.bookingEndDate && touched.bookingEndDate && true}
        label={endLabel}
        value={bookingEndDate}
        onchange={(newDate) => {
          setFieldValue('bookingEndDate', newDate.$d);
        }}
        onBlur={handleBlur}
      />
      <Button variant='contained'>Book</Button>
    </form>
  );
};

export default BookingRequest;
