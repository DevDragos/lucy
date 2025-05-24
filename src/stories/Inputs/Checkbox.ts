export interface CheckboxProps {
  disabled?: boolean
}

export const createCheckbox = ({ disabled = false }: CheckboxProps) => {
  const label = document.createElement('label')
  label.className = 'checkbox' + (disabled ? ' disabled' : '')

  const input = document.createElement('input')
  input.type = 'checkbox'
  input.disabled = disabled

  const checkmark = document.createElement('span')
  checkmark.className = 'checkmark'

  const labelText = document.createElement('span')
  labelText.className = 'label-text'
  labelText.textContent = 'Option'

  label.appendChild(input)
  label.appendChild(checkmark)
  label.appendChild(labelText)

  return label
}
