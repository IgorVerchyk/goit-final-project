export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = `Обов'язкове поле`;
  } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(values.email)) {
    errors.email = 'Невірний E-mail';
  }
  if (!values.password) {
    errors.password = `Обов'язкове поле`;
  } else if (!/[a-zA-Z0-9]/.test(values.password)) {
    errors.password = 'Пароль має неприпустимі символи';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль має бути білше 6 символів';
  }

  if (!values.password2) {
    errors.password2 = `Обов'язкове поле`;
  } else if (!/[a-zA-Z0-9]/.test(values.password)) {
    errors.password = 'Пароль має неприпустимі символи';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Паролі не співпадають';
  }
  return errors;
}
