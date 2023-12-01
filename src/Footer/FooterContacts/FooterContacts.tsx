import styles from './footercontacts.css';
import { FooterSubTitle } from '../FooterSubTitle';
import { Phone } from '../../Phone';
import { Socials } from '../../Socials';
import { Copyright } from '../Copyright';

export function FooterContacts() {
  return (
    <div className={styles.footerContacts}>
      <FooterSubTitle title={'Контакты'}/>
      <div className={styles.linkList}>
        <Phone number={'+7 555 555-55-55'}/>
        <Socials width={80}/>
        <div className={styles.address}>Москва, Путевой проезд 3с1, к 902</div>
      </div>
      <Copyright/>
    </div>
  );
}
