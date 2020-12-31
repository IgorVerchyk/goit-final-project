import styles from './ButtonAddNew.module.scss';

export default function AddNewBtn({ setShowModal }) {
  return <div className={styles.add} onClick={setShowModal}></div>;
}
