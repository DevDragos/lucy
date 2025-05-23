export interface InputProps {
  disabled?: boolean
  labelText: string
}

export const createInput = ({ labelText, disabled = false }: InputProps) => {
  const wrapper = document.createElement('div')

  if (labelText) {
    const labelEl = document.createElement('label')
    labelEl.textContent = labelText
    labelEl.className = 'label mb-8' + (disabled ? ' disabled' : '')
    wrapper.appendChild(labelEl)
  }

  const input = document.createElement('input')
  input.type = 'text'
  input.className = 'input'
  input.disabled = disabled

  wrapper.appendChild(input)

  return wrapper
}
