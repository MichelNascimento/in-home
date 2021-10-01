import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, ImageLogo, Header } from './styles'
import { colors } from '../../constants/colors'

type LoginProps = {
    navigation: any
}

const Login: React.FC<LoginProps> = ({ navigation }) => (
    <Container>
        <Header>
            <Icon
                name="arrow-back-ios"
                size={40}
                color={colors.dark}
                onPress={() => (
                    navigation.navigate('Approach')
                )}
            />
            <ImageLogo
                source={require('../../../assets/images/imgGarden.png')}
            />
        </Header>
    </Container>
)

export default Login