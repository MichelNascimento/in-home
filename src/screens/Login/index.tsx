import React from 'react'

import { Container, FormContainer } from './styles'

import Header from '../../components/Header'
import FormField from '../../components/FormField'
import Button from '../../components/Button'

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
        <FormContainer>
            <FormField
                labelText="E-mail"
            />
            <FormField
                labelText="Password"
                secureTextEntry
            />
            <Button 
                isPrimary
                text="Sign in"
            />
        </FormContainer>
    </Container>
)

export default Login