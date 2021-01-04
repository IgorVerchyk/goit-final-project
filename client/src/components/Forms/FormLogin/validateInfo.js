export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Невірний E-mail';
  } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(values.email)) {
    errors.email = 'Невірний E-mail';
  }

  if (!values.password) {
    errors.password = 'Невірний пароль';
  } else if (!/[a-zA-Z0-9]/.test(values.password)) {
    errors.password = 'Пароль має неприпустимі символи';
  } else if (values.password.length < 6) {
    console.log(values.password.length);
    errors.password = 'Пароль має бути білше 6 символів';
  }
  return errors;
}
