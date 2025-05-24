export interface ToggleProps {
  disabled?: boolean
}

export const createToggle = ({ disabled = false }: ToggleProps) => {
  const label = document.createElement('label')
  label.className = 'toggle' + (disabled ? ' disabled' : '')

  const input = document.createElement('input')
  input.type = 'checkbox'
  input.disabled = disabled

  const slider = document.createElement('span')
  slider.className = 'slider'

  const labelText = document.createElement('span')
  labelText.className = 'label-text'
  labelText.textContent = 'Toggle'

  label.appendChild(input)
  label.appendChild(slider)
  label.appendChild(labelText)

  return label
}
