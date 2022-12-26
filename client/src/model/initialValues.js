//DAY-JS
import dayjs from 'dayjs';

//DATE HANDLERS
export const labelValues = {
  startDate: dayjs('2014-08-18T21:11:54'),
  endDate: dayjs('2014-08-18T21:11:54'),
  startLabel: 'Pickup Date & Time',
  endLabel: 'Return Date & Time',
};

export const inialFormValues = {
  name: '',
  email: '',
  phone: '',
  gender: '',
  bookingStartDate: labelValues.startDate,
  bookingEndDate: labelValues.startDate,
};
