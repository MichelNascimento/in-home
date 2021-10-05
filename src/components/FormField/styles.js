import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const LabelContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const IndicatorNumberContainer = styled.View`
    background-color: ${colors.dark};
    padding: 6px 14px;
    border-radius: 45;
`

export const IndicatorNumber = styled.Text`
    color: ${colors.light};
    font-weight: 600;
    font-size: 20;
`

export const Label = styled.Text`
    font-size: 24px;
    font-weight: 600;
    line-height: 28.15px;
    color: ${colors.dark};
    margin: 0 8px;
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

export const HelpText = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.textSecondary};
`