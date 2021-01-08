import toastr from 'toastr';
import 'toastr/build/toastr.css';

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  onclick: null,
  showDuration: '1000',
  hideDuration: '1000',
  timeOut: '3000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

export default toastr;
