import { IIcon } from '../../interfaces/IIcon';

export function TelegramIcon({parameters}:IIcon) {
  return (
    <a href="#">
      <svg width={parameters.width} height={parameters.height} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.2208 0.0975332L1.44582 5.79503C0.437482 6.20003 0.443316 6.76253 1.26082 7.01337L5.05415 8.1967L13.8308 2.6592C14.2458 2.4067 14.625 2.54253 14.3133 2.8192L7.20248 9.2367H7.20082L7.20248 9.23753L6.94082 13.1475C7.32415 13.1475 7.49332 12.9717 7.70831 12.7642L9.55082 10.9725L13.3833 13.8034C14.09 14.1925 14.5975 13.9925 14.7733 13.1492L17.2892 1.29253C17.5466 0.260033 16.895 -0.207467 16.2208 0.0975332Z" fill="#E4E5EA"/>
      </svg>
    </a>
  );
}
