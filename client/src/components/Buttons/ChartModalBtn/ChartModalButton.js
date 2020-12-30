import s from './ChartModalButton.module.scss';

const ChartModalButton = ({ onButtonClick }) => (
  <button className={s.chartModalBtn} onClick={onButtonClick}></button>
);
export default ChartModalButton;
