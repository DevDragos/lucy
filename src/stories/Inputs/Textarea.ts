export interface TextareaProps {
  disabled?: boolean
  labelText: string
}

export const createTextarea = ({ labelText, disabled = false }: TextareaProps) => {
  const wrapper = document.createElement('div')

  if (labelText) {
    const labelEl = document.createElement('label')
    labelEl.textContent = labelText
    labelEl.className = 'label mb-8' + (disabled ? ' disabled' : '')
    wrapper.appendChild(labelEl)
  }

  const input = document.createElement('textarea')
  input.className = 'textarea'
  input.disabled = disabled

  wrapper.appendChild(input)

  return wrapper
}
