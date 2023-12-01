import styles from './footersubtitle.css';

interface IFooterSubTitleProps {
  title: string
}

export function FooterSubTitle({title}: IFooterSubTitleProps) {
  return (
    <div className={styles.footerSubTitle}>
      {title}
    </div>
  );
}
