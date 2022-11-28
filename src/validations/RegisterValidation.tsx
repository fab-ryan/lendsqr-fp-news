import * as yup from 'yup';

export const RegisterValidation = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(12)
    .max(12)
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Email is invalid')
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'Email is invalid'
    ),
});
