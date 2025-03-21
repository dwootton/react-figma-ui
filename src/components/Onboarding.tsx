import React, { HTMLProps } from 'react';
import clsx from 'clsx';

import { Icon, Props as IconProps } from './Icon';

interface Props extends Readonly<HTMLProps<HTMLDivElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly iconProps: IconProps;
}

export const Onboarding = ({
  children,
  className = '',
  containerProps = {},
  iconProps,
  ...props
}: Props) => {
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;
  const { style: iconStyle = {}, ...iconRest } = iconProps;

  return (
    <div
      {...containerRest}
      className={clsx('onboarding-tip', containerClassName)}
    >
      <Icon {...iconRest} style={{ minWidth: 32, ...iconStyle }} />

      <div {...props} className={clsx('onboarding-tip__msg', className)}>
        {children}
      </div>
    </div>
  );
};
