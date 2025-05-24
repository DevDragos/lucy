import { addons } from '@storybook/manager-api'
// @ts-ignore
import customTheme from './customTheme.ts'

addons.setConfig({
  theme: customTheme
})
