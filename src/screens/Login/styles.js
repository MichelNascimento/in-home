import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.light};
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 32px;
`

export const ImageLogo = styled.Image`
    width: 40px;
    height: 40px;
`