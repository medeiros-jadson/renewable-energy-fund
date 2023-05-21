import { FormValidator } from '~/libs';

export const validationSchema = FormValidator.object({
  firstName: FormValidator.string().required(),
  lastName: FormValidator.string().required(),
  email: FormValidator.string().email().required(),
  password: FormValidator.string().min(8).required(),
});

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
