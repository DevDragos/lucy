export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  disabled?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const createButton = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
    disabled = false
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.disabled = disabled;

  if (onClick && !disabled) {
    btn.addEventListener('click', onClick);
  }

  const mode = primary ? ' btn-primary' : 'btn-secondary';
  btn.className = ['btn', `btn-${size}`, mode].join(' ');

  return btn;
};
