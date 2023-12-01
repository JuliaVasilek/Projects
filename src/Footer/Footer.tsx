import React from 'react';
import styles from './footer.css';
import { FooterSubItem } from './FooterSubItem';
import { FooterContacts } from './FooterContacts';

export function Footer() {
  const listCompany = ['Партнёрская программа', 'Вакансии'];
  const listMenu = ['Расчёт стоимости', 'Услуги', 'Виджеты', 'Интеграции', 'Наши клиенты', 'Кейсы', 'Благодарственные письма', 'Сертификаты', 'Блог на Youtube', 'Вопрос / Ответ'];
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <FooterSubItem title ='О компании' linkList={listCompany}/>
        <FooterSubItem title = 'Меню' linkList={listMenu}/>
        <FooterContacts/>
      </div>
    </div>
  );
}
