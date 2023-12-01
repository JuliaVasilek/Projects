import { Logo } from '../../SVGComponents/Logo/Logo';
import styles from './logoblock.css';

export function LogoBlock() {
  return (
    <div className={styles.logoBlock}>
      <Logo/>
      <div className={styles.subtext}>крупный интегратор CRM в Росcии и ещё 8 странах</div>
    </div>
  );
}
