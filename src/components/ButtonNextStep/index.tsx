import React from 'react'
import { Text } from 'react-native'

import Icon from 'react-native-vector-icons/Entypo'
import { colors } from '../../constants/colors'

import { ButtonContainer } from './styles'

const ButtonNextStep = () => (
    <>
        <ButtonContainer title="">
            <Icon 
                name="chevron-with-circle-right"
                color={colors.light}
                size={48}
            >
            </Icon>
        </ButtonContainer>
    </>
)

export default ButtonNextStep