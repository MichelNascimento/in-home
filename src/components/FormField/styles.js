import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const Label = styled.Text`
    font-size: 24px;
    font-weight: 600;
    line-height: 28.15px;
    color: ${colors.dark};
`

export const Input = styled.TextInput`
    width: 330px;
    height: 60px;
    background-color: ${colors.inputBackground};
    border-radius: 10px;
    padding: 0 16px;
    font-size: 16px;
    margin: 16px 0;
`