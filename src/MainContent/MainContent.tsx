import styles from './maincontent.css';
import { TitleBlock } from './TitleBlock';
import { InfoBlock } from './InfoBlock';

export function MainContent() {
  return (
    <div className={styles.mainContent}>
      <TitleBlock/>
      <InfoBlock/>
    </div>
  );
}
