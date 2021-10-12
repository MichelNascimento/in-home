import React from 'react'

import { Container } from './styles'

import Header from '../../components/Header'
import FormField from '../../components/FormField'

type RegisterProps = {
    navigation: any
}

const Register: React.FC<RegisterProps> = ({ navigation }) => (
    <Container>
        <Header 
            onIconPress={() => 
                navigation.navigate('Approach')
            }
        />
        <FormField 
            labelText="What's your name?"
            hasIndicatorNumber
            indicatorNumber="1"
            hasHelpText
            helpText="That's what we'll call you inside the app :)"
        />
    </Container>
)

export default Register