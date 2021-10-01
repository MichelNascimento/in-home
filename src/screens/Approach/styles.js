import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.light};
    align-items: center;
`

export const ApproachImage = styled.Image`
    width: 230px;
    height: 235px;
    margin-top: 48px;
`

export const ApproachText = styled.Text`
    font-size: 28px;
    font-weight: 600;
    color: ${colors.dark};
    margin-top: 64px;
`

export const ApproachParagraph = styled.Text`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${colors.textSecondary};
    text-align: center;
    max-width: 300px;
    margin-top: 24px;
`

export const Button = styled.TouchableHighlight`
    background-color: ${props => props.primary ? colors.primary : 'transparent'};
    width: 330px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 8px 8px 32px rgba(0, 0, 0, 0.15);
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.primary ? '40px' : '32px'};
`

export const ButtonText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.primary ? colors.light : colors.primary};
`