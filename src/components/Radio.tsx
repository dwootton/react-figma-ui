import React, { HTMLProps } from 'react';

interface Props {
  id: string;
  radioProps?: HTMLProps<HTMLDivElement>;
  inputProps?: HTMLProps<HTMLInputElement>;
  labelProps?: HTMLProps<HTMLLabelElement>;
}

export const Radio: React.FC<Props> = ({
  children,
  id,
  radioProps = {},
  inputProps = {},
  labelProps = {},
}) => {
  const { className: radioClassName, ...radioRest } = radioProps;
  const { className: inputClassName, ...inputRest } = inputProps;
  const { className: labelClassName, ...labelRest } = labelProps;

  return (
    <div {...radioRest} className={`radio ${radioClassName}`}>
      <input
        {...inputRest}
        id={id}
        type="radio"
        className={`radio__button ${inputClassName}`}
      />

      <label
        {...labelRest}
        htmlFor={id}
        className={`radio__label ${labelClassName}`}
      >
        {children}
      </label>
    </div>
  );
};
