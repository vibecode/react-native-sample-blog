import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons'

const AppHeaderIcon: React.FC = props => {
  return (
    <HeaderButton
      {...props}
      title="Header button"
      iconSize={24}
      IconComponent={Ionicons}
      color={THEME.HEADER_TINT_COLOR}
    />
  )
}

export default AppHeaderIcon
