import styles from './card.css';

interface ICardProps {
  content: {title: string, text: string},
}

export function Card({content}:ICardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.text}>{content.text}</div>
    </div>
  );
}
