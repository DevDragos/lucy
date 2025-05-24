export interface ButtonProps {
  variant?: string
  disabled?: boolean
  label: string
  onClick?: () => void
}

/** Primary UI component for user interaction */
export const createButton = ({ variant, label, onClick, disabled = false }: ButtonProps) => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = label
  btn.disabled = disabled

  if (onClick && !disabled) {
    btn.addEventListener('click', onClick)
  }

  btn.className = ['btn', `btn-${variant}`].join(' ')

  return btn
}
