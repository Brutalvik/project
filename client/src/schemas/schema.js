import * as yup from 'yup';

//BOOKING REQUEST VALIDATION SCHEMA
export const bookingRequestSchema = yup.object().shape({
  name: yup.string().required('Please enter a name !'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter an email !'),
  phone: yup
    .number('Please enter a valid phone number !')
    .positive()
    .integer()
    .required('Please enter a phone number !'),
  gender: yup.string().required('Required !'),
  bookingStartDate: yup.date().required('Please select start Date/Time'),
  bookingEndDate: yup.date().required('Please select end Date/Time'),
});

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
