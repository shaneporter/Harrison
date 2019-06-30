import React, { ReactElement } from 'react';
import styles from './Overlay.module.css';

import { IntroProps } from './Intro';
import { ErrorProps } from './Error'; 
import { ProgressProps } from './Progress';

export interface OverlayProps {
  children: ReactElement<IntroProps | ProgressProps | ErrorProps>
};

const Overlay: React.FC<OverlayProps> = ({children}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        {children}
      </div>
    </div>
  );
}

export default Overlay;
