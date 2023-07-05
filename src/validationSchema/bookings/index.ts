import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  location: yup.string().required(),
  car_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
