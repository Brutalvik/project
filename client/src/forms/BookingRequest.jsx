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
import DatePicker from '../UI/DatePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

//CSS
import styles from './Forms.module.css';

//HANDLERS
import { labelValues, inialFormValues } from '../model/initialValues.js';

//FORMIK
import { useFormik } from 'formik';
import { bookingRequestSchema } from '../schemas/schema';

//UI
import ValidationError from '../UI/ValidationError';

//REDUX
import { useDispatch } from 'react-redux';
import { postBookingRequest } from '../state/bookingRequestThunk';

const BookingRequest = () => {
  const dispatch = useDispatch();

  //SUBMIT HANDLER
  const onSubmit = (values, actions) => {
    const bookingData = {
      ...values,
      bookingStartDate: bookingStartDate.$d,
      bookingEndDate: bookingEndDate.$d,
    };
    console.log('sent data : ', bookingData);
    dispatch(postBookingRequest(bookingData));
    actions.resetForm();
  };

  const { startLabel, endLabel } = labelValues;
  const {
    values,
    errors,
    touched,
    isSubmitting,
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
      <ValidationError
        isError={errors.name}
        isTouched={touched.name}
        errorMessage={errors.name}
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
      <ValidationError
        isError={errors.email}
        isTouched={touched.email}
        errorMessage={errors.email}
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
      <ValidationError
        isError={errors.phone}
        isTouched={touched.phone}
        errorMessage={errors.phone}
      />
      <FormControl>
        <FormLabel
          error={errors.gender && true}
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
      <ValidationError
        isError={errors.gender}
        isTouched={touched.gender}
        errorMessage={errors.gender}
      />
      <DatePicker
        error={errors.bookingStartDate && touched.bookingStartDate && true}
        label={startLabel}
        value={bookingStartDate}
        onchange={async (newDate) => {
          await setFieldValue('bookingEndDate', '');
          setFieldValue('bookingStartDate', newDate.$d);
        }}
        onBlur={handleBlur}
      />
      <ValidationError
        isError={errors.bookingStartDate}
        isTouched={touched.bookingStartDate}
        errorMessage={errors.bookingStartDate}
      />
      <DatePicker
        error={errors.bookingEndDate && touched.bookingEndDate && true}
        label={endLabel}
        value={bookingEndDate}
        onchange={async (newDate) => {
          await setFieldValue('bookingEndDate', '');
          setFieldValue('bookingEndDate', newDate.$d);
        }}
        onBlur={handleBlur}
      />
      <ValidationError
        isError={errors.bookingEndDate}
        isTouched={touched.bookingEndDate}
        errorMessage={errors.bookingEndDate}
      />
      <LoadingButton
        loading={isSubmitting}
        loadingPosition='start'
        startIcon={<SendIcon />}
        variant='outlined'
        type='submit'
      >
        Book
      </LoadingButton>
    </form>
  );
};

export default BookingRequest;
