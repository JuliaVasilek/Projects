import styles from './navlist.css';
import { NavItem } from './NavItem';

interface INavListProps {
  linkArr: string[]
}

export function NavList({linkArr}:INavListProps) {
  return (
    <div className={styles.navList}>
      {
        linkArr.map((item)=>(
          <NavItem prop={item}/>
        ))
      }
    </div>
  );
}
