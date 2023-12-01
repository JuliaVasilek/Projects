import { useContext } from 'react';
import styles from './header.css';
import { LogoBlock } from './LogoBlock';
import { NavList } from './NavList';
import { Phone } from '../Phone';
import { Socials } from '../Socials';
import { screenSizeContext } from '../contexts/screenSizeContext';

export function Header() {

  const {windowWidth, windowHeight} = useContext(screenSizeContext);

  const linkArr = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы'];
  if (windowWidth >= 1440) {
    linkArr.push('Сертификаты');
  }
  const phoneNumber = '+7 555 555-55-55';
  return (
    <div className={styles.header}>
      {
        (windowWidth >= 1440)&&(
          <LogoBlock/>
        )
      }
      <NavList linkArr={linkArr}/>
      {
        (windowWidth >= 1440)&&(
          <div className={styles.contactsWrapper}>
            <Phone number={phoneNumber}/>
            <div className={styles.emptySpace}></div>
            <Socials width={120}/>
          </div>
        )
      }
      
    </div>
  );
}
