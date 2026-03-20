import styles from './Goto.module.scss';

function Goto({ link }) {
  console.log('바로가기: ', link);

  return <div className={styles.icon}>goto button?</div>;
}

export default Goto;
