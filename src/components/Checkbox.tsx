import React, { HTMLProps } from 'react';
import clsx from 'clsx';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly containerProps?: Readonly<HTMLProps<HTMLDivElement>>;
  readonly labelProps?: Readonly<HTMLProps<HTMLLabelElement>>;
}

export const Checkbox = ({
  children,
  id,
  className = '',
  containerProps = {},
  labelProps = {},
  ...props
}: Props) => {
  const {
    className: containerClassName = '',
    ...containerRest
  } = containerProps;
  const { className: labelClassName = '', ...labelRest } = labelProps;

  return (
    <div {...containerRest} className={clsx('checkbox', containerClassName)}>
      <input
        {...props}
        id={id}
        type="checkbox"
        className={clsx('checkbox__box', className)}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={clsx('checkbox__label', labelClassName)}
      >
        {children}
      </label>
    </div>
  );
};
