import React from 'react';
import styles from './Sun.module.css';

export interface SunProps {
  sunrise: string,
  sunset: string
}

const Sun: React.FC<SunProps> = ({sunrise, sunset}) => {
  return (
    <div className={styles.stage}>
      <div className={styles.sky}>
        <div className={styles.time}><span>Sunrise</span>{sunrise}</div>
      </div>
      <div className={styles.earth}>
        <div className={styles.time}><span>Sunset</span>{sunset}</div>    
      </div>
      <div className={styles.sun} />
    </div>
  );
}

export default Sun;
