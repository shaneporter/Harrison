import React from 'react';
import styles from './Progress.module.css';
import sun from '../sun.svg';
export interface ProgressProps {

}

const Progress: React.FC<ProgressProps> = () => {
  return (
    <div>
      <img src={sun} className={styles.sunLoader} alt="Loading" />
    </div>
  );
}

export default Progress;

