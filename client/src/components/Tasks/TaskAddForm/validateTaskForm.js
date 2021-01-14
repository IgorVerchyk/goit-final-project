const validate = values => {
  let errors = {};
  if (!values.descr) {
    errors.descr = 'Required';
  }
  if (!values.planTime) {
    errors.planTime = 'Required';
  }
  return errors;
};

export default validate;
