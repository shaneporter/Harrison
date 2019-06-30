import React from 'react';
import styles from './Intro.module.css';

export interface IntroProps {
  onStart: React.MouseEventHandler<HTMLButtonElement>;
}

const Intro: React.FC<IntroProps> = ({onStart}) => {
  return (
    <>
      <p>This little app will determine the sunrise and sunset times for the current day</p>
      <p>Clicking on the button will ask for permission to use your location</p>
      <button onClick={onStart} className={styles.button}>Get my sun times!</button>
    </>
  );
}

export default Intro;
