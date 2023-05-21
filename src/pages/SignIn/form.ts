import { FormValidator } from '~/libs';

export const validationSchema = FormValidator.object({
  email: FormValidator.string().email().required(),
  password: FormValidator.string().min(8).required(),
});

export type FormValues = {
  email: string;
  password: string;
};

export const initialValues = {
  email: '',
  password: '',
};
