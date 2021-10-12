import styled from 'styled-components'

import { colors } from '../../constants/colors'

export const ButtonContainer = styled.TouchableHighlight`
    background-color: ${colors.primary};
    max-width: 120px;
    height: 70px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    box-shadow: 8px 8px 32px rgba(0, 0, 0, 0.15);
`