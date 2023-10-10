import React from 'react';
import './button.css';

const ButtonIcon = () => <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6V11.7125H4.28125H8.5625V10.2875V8.8625H7.1375H5.7125V7.43125V6H7.14375H8.575V4.56875V3.1375H9.2875H10V1.7125V0.287498H9.28755H8.5751L8.57193 1.71562L8.56875 3.14375H7.85625H7.14375L7.14057 1.71562L7.1374 0.287498H5.73745H4.3375V0.999999V1.7125H5.025H5.7125V3.85625V6H5H4.2875V7.43135V8.8627L3.57188 8.85947L2.85625 8.85625L2.85311 4.57187L2.84996 0.287498H1.42499H0V6Z" fill="white"/>
</svg>

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  icon?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  icon,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, ...icon ? ['storybook-button--icon'] : [], mode].join(' ')}
      {...props}
    >
      {icon && (
        <ButtonIcon />
      )}
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
