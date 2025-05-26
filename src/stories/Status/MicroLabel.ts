export interface MicroLabelProps {
  labelText: string
  variant: string
}

export const createMicroLabel = ({ labelText, variant }: MicroLabelProps) => {
  const labelEl = document.createElement('div')
  labelEl.textContent = labelText
  labelEl.className = ['badge', `badge-${variant}`].join(' ')

  return labelEl
}
