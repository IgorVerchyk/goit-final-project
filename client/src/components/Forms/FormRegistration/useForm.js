import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authOperations } from '../../../redux/auth/';

const useForm = (callback, validate) => {
  const history = useHistory();

  const [values, setValues] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const onRegister = useCallback(
    dataUser => dispatch(authOperations.register(dataUser)),
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

    console.log(values);
    console.log(errors);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      onRegister(values);
      console.log(values);
      // setTimeout(() => {
      //   history.replace('/login');
      // }, 2500);
    }
  }, [callback, errors, history, isSubmitting, onRegister, values]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
