import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authOperations } from '../../../redux/auth/';

const useForm = (callback, validate) => {
  const history = useHistory();

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
    setErrors(validate(values));

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      onLogin(values);
      // setTimeout(() => {
      //   history.replace('/');
      // }, 2500);
    }
  }, [callback, errors, history, isSubmitting, onLogin, values]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
