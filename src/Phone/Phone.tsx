import styles from './phone.css';

interface IPhoneProps {
  number: string,
}

export function Phone({number}:IPhoneProps) {
  return (
    <div className={styles.phone}>
      {number}
    </div>
  );
}
