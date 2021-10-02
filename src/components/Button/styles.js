import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const ButtonContainer = styled.TouchableHighlight`
    background-color: ${({ isPrimary }) => isPrimary ? colors.primary : 'transparent'};
    width: 330px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 8px 8px 32px rgba(0, 0, 0, 0.15);
    justify-content: center;
    align-items: center;
    margin-top: ${({ isPrimary }) => isPrimary ? '40px' : '32px'};
`

export const ButtonText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${({ isPrimary }) => isPrimary ? colors.light : colors.primary};
`