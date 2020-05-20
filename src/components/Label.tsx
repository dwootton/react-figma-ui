import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  value: string;
}

export const Label: React.FC<Props> = ({ value, className = '', ...props }) => (
  <div {...props} className={`label ${className}`}>
    {value}
  </div>
);
