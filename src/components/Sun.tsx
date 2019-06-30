import React from 'react';

export interface SunProps {
  sunrise: string,
  sunset: string
}

const Sun: React.FC<SunProps> = ({sunrise, sunset}) => {
  return (
    <div>{sunrise} / {sunset}</div>
  );
}

export default Sun;
