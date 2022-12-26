//DAY-JS
import dayjs from 'dayjs';

//DATE HANDLERS
export const labelValues = {
  startLabel: 'Pickup Date & Time',
  endLabel: 'Return Date & Time',
};

export const inialFormValues = {
  name: '',
  email: '',
  phone: '',
  gender: '',
  bookingStartDate: dayjs(),
  bookingEndDate: dayjs(),
};
