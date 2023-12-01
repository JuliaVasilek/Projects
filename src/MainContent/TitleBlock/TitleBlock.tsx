import styles from './titleblock.css';
import { Title } from './Title/Title';

export function TitleBlock() {
  return (
    <div className={styles.titleBlock}>
      <Title/>
      <div className={styles.subtext}>Развиваем и контролируем продажи за вас</div>
    </div>
  );
}
