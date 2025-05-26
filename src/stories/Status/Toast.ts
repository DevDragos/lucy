export interface ToastProps {
  titleText: string
  content: string
  variant: string
}

export const createToast = ({ titleText, content, variant }: ToastProps) => {
  const wrapper = document.createElement('div')
  wrapper.className = ['toast', `toast-${variant}`].join(' ')

  const icon = document.createElement('span')
  icon.className = 'material-symbols-outlined toast-icon mr-8'
  icon.textContent = getIconName(variant)
  wrapper.appendChild(icon)

  const contentWrapper = document.createElement('div')
  contentWrapper.className = 'd-flex flex-column'

  const title = document.createElement('span')
  title.className = 'toast-title mb-8'
  title.textContent = titleText
  contentWrapper.appendChild(title)

  const contentText = document.createElement('span')
  contentText.textContent = content
  contentWrapper.appendChild(contentText)

  wrapper.appendChild(contentWrapper)

  return wrapper
}

function getIconName(variant: string) {
  switch (variant) {
    case 'success':
      return 'check_circle'
    case 'error':
      return 'error'
    case 'warning':
      return 'warning'
    case 'info':
      return 'info'
    default:
      return 'notifications'
  }
}
