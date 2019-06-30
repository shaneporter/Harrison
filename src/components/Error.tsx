import React from 'react';
import styles from './Error.module.css';
import sun from '../sun.svg';

export interface ErrorProps {
  message: string
}

const Error: React.FC<ErrorProps> = ({message}) => {
  return (
    <div className={styles.error}>
      <img src={sun} className={styles.sunUnhappy} alt="The sun is sad because an error occurred" />
      <h3>Sorry, an error happened</h3>
      {message}
    </div>
  );
}

export default Error;
