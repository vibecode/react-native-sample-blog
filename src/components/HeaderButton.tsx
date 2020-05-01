import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import AppHeaderIcon from '../components/AppHeaderIcon'

type Props = {
  iconName: string
  title: string
  onPress?: () => any
}

const HeaderButton: React.FC<Props> = ({ title, iconName, onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title={title} iconName={iconName} onPress={onPress} />
    </HeaderButtons>
  )
}

export default HeaderButton
