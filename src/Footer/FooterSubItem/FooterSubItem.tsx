import styles from './footersubitem.css';
import { FooterSubTitle } from '../FooterSubTitle';

interface IFooterSubItemProps {
  title: string,
  linkList: string[],
}

export function FooterSubItem({title, linkList}: IFooterSubItemProps) {
  const linkList1 = linkList.slice(0, 5);
  const linkList2 = linkList.slice(5);
  return (
    <div className={styles.footerSubItem}>
      <FooterSubTitle title={title}/>
      <div className={styles.linkList}>
        <div className={styles.wrapper}>
          {(linkList.length <= 5)&&(
            linkList.map((item)=>(
              <a href='#' className={styles.link}>{item}</a>
            ))
          )}
          {(linkList.length > 5)&&(
            linkList1.map((item)=>(
              <a href='#' className={styles.link}>{item}</a>
            )))}
        </div>
        {
          (linkList.length > 5)&&(
            <div className={styles.wrapper}>
              {
                linkList2.map((item)=>(
                  <a href='#' className={styles.link}>{item}</a>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
}
