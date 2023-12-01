import styles from './navitem.css';

interface INavItemProps {
  prop: string,
}

export function NavItem({prop}:INavItemProps) {
  return (
    <a href='#' className={styles.navItem}>
      {prop}
    </a>
  );
}
