import { createAction } from '@reduxjs/toolkit';

const submitAuthFormRequest = createAction('orders/submitAuthFormRequest');
const submitAuthFormSuccess = createAction('orders/submitAuthFormSuccess');
const submitAuthFormError = createAction('orders/submitAuthFormError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  submitAuthFormRequest,
  submitAuthFormSuccess,
  submitAuthFormError,
};
