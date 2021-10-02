import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors } from '../../constants/colors'

import { Header as HeaderElement, ImageLogo } from './styles'

type HeaderProps = {
    onIconPress: () => {}
}

const Header: React.FC<HeaderProps> = ({ onIconPress }) => (
    <HeaderElement>
        <Icon
            name="arrow-back-ios"
            size={40}
            color={colors.dark}
            onPress={onIconPress}
        />
        <ImageLogo
            source={require('../../../assets/images/imgGarden.png')}
        />
    </HeaderElement>
)

export default Header