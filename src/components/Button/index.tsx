import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

type ButtonProps = {
    isPrimary: boolean
    text: string
    onPress?: () => {}
    underlayColor?: string
}

const Button: React.FC<ButtonProps> = ({ isPrimary, text, onPress, underlayColor }) => (
    <ButtonContainer isPrimary={isPrimary} onPress={onPress} underlayColor={underlayColor}>
        <ButtonText isPrimary={isPrimary}>
            {text}
        </ButtonText>
    </ButtonContainer>
)

export default Button