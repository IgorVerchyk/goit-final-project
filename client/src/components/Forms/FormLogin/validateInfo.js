export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Невірний E-mail';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Невірний E-mail';
  }
  if (!values.password) {
    errors.password = 'Невірний пароль';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль має бути білше 6 символів';
  }
  return errors;
}
