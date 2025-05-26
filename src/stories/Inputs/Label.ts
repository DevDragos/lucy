export interface LabelProps {
  disabled?: boolean
  labelText: string
}

export const createLabel = ({ labelText, disabled = false }: LabelProps) => {
  const labelEl = document.createElement('label')
  labelEl.textContent = labelText
  labelEl.className = 'label' + (disabled ? ' disabled' : '')

  return labelEl
}
