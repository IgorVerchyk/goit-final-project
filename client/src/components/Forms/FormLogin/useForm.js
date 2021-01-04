import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../../redux/auth/';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const onLogin = useCallback(
    dataUser => dispatch(authOperations.login(dataUser)),
    [dispatch],
  );

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors(validate(values));
  };

  const handleBlur = () => {
    setErrors(validate(values));
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (values.email === '') {
      return;
    } else if (values.password === '') {
      return;
    } else {
      setErrors(validate(values));
    }
  }, [validate, values]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
  }, [callback, errors, isSubmitting, onLogin, values]);

  return { handleBlur, handleChange, handleSubmit, values, errors };
};

export default useForm;
