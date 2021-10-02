import React from 'react'

import { Container } from './styles'

import Header from '../../components/Header'

type LoginProps = {
    navigation: any
}

const Login: React.FC<LoginProps> = ({ navigation }) => (
    <Container>
        <Header 
            onIconPress={() => (
                navigation.navigate('Approach')
            )}
        />
    </Container>
)

export default Login