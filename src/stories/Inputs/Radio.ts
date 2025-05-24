export interface RadioProps {
  disabled?: boolean
}

export const createRadio = ({ disabled = false }: RadioProps) => {
  const label = document.createElement('label')
  label.className = 'radio ' + (disabled ? ' disabled' : '')

  const input = document.createElement('input')
  input.type = 'radio'
  input.name = 'options'
  input.disabled = disabled

  const radiocheck = document.createElement('span')
  radiocheck.className = 'radiocheck'

  const labelText = document.createElement('span')
  labelText.className = 'label-text'
  labelText.textContent = 'Radio'

  label.appendChild(input)
  label.appendChild(radiocheck)
  label.appendChild(labelText)

  return label
}
