import styles from './socials.css';
import { TelegramIcon } from '../SVGComponents/TelegramIcon';
import { PhoneIcon } from '../SVGComponents/PhoneIcon';
import { WhatsAppIcon } from '../SVGComponents/WhatsAppIcon';

interface ISocialsProps {
  width: 80|92|120
}

export function Socials({width}:ISocialsProps) {
  const iconSize = {width: 20, height: 20};
  let widthClass = '';
  switch (width) {
    case 80:
      widthClass = 'width80';
      break;
    case 92:
      widthClass = 'width92';
      break;
    case 120:
      widthClass = 'width120';
      break;
  }
  return (
    <div className={`${styles.socials} ${((widthClass === 'width80')&&(styles.width80))||((widthClass === 'width92')&&(styles.width92))||((widthClass === 'width120')&&(styles.width120))}`}>
      <TelegramIcon parameters={iconSize}/>
      <PhoneIcon parameters={iconSize}/>
      <WhatsAppIcon parameters={iconSize}/>
    </div>
  );
}
