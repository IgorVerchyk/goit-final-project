import s from './CloseModalBtn.module.scss';
const CloseModalBtn = ({ onButtonClick }) => (
  <div onClick={onButtonClick} className={s.closeContainer}>
    <div className={s.leftright}></div>
    <div className={s.rightleft}></div>
    <label className={s.close}>Закрити</label>
  </div>
);

export default CloseModalBtn;
