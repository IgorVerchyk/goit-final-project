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
  const onLogin = useCallback(
    dataUser => dispatch(authOperations.login(dataUser)),
    [dispatch],
  );

  const handleChange = async e => {
    const { name, value } = e.target;
    await setValues({
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
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback({ email: values.email, password: values.password });
    }
  }, [callback, errors, history, isSubmitting, onLogin, values]);

  return { handleBlur, handleChange, handleSubmit, values, errors };
};

export default useForm;
