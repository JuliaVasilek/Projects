import { useContext } from 'react';
import styles from './infoblock.css';
import { Card } from './Card';
import { Button } from './Button';
import { screenSizeContext } from '../../contexts/screenSizeContext';
import { MobileCard } from './MobileCard';

export function InfoBlock() {
  const {windowWidth, windowHeight} = useContext(screenSizeContext);
  const list = [{title: 'Виджеты', text: '30 готовых решений'}, {title: 'Dashboard', text: 'с показателями вашего бизнеса'}, {title: 'Skype Аудит', text: 'отдела продаж и CRM системы'}, {title: '35 дней', text: 'использования CRM'}, ];
  const mobileList = ['Skype аудит', '30 виджетов', 'Dashboard', 'Месяц аmoCRM'];
  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoTitle}>
      Вместе с <div className={styles.highlight}>бесплатной консультацией</div> мы дарим:
      </div>
      {
        (windowWidth >= 1440)&&(
          <div className={styles.cardList}>
            {list.map((item)=>(
              <Card content={item}/>
            ))}
          </div>
        )
      }
      {
        (windowWidth < 1440)&&(
          <div className={styles.cardList}>
            {mobileList.map((item)=>(
              <MobileCard text={item}/>
            ))}
          </div>
        )
      }
      {
        (windowWidth >= 1440)&&(
          <Button/>
        )
      }
    </div>
  );
}
