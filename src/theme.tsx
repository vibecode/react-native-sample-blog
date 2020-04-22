import { Platform } from 'react-native'

export const THEME = {
  MAIN_COLOR: '#303f9f',
  DANGER_COLOR: '#d81b60',
  get HEADER_BG_COLOR() {
    return Platform.OS === 'android' ? this.MAIN_COLOR : '#fff'
  },
  get HEADER_TINT_COLOR() {
    return Platform.OS === 'android' ? '#fff' : this.MAIN_COLOR
  }
}
