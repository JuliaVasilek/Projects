import styles from './copyright.css';

export function Copyright() {
  return (
    <div className={styles.copyright}>
      <div>©WELBEX 2022. Все права защищены.</div>
      <a href='#'>Политика конфиденциальности</a>
    </div>
  );
}
