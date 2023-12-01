import styles from './mobilecard.css';

interface IMobileCardProps {
  text: string
}

export function MobileCard({text}: IMobileCardProps) {
  return (
    <div className={styles.mobileCard}>
      <div className={styles.dash}></div>
      {text}
    </div>
  );
}
