import React from 'react'
import { Container, ApproachText, ApproachParagraph, ApproachImage } from './styles'
import Button from '../../components/Button'

type ApproachProps = {
    navigation: any
}

const Approach: React.FC<ApproachProps> = ({ navigation }) => (
    <Container>
        <ApproachImage
            source={require('../../../assets/images/imgGarden.png')}
        />
        <ApproachText>
            Make yourself at home
        </ApproachText>
        <ApproachParagraph>
            Get started and create the environment that make you feel better.
        </ApproachParagraph>
        <Button
            isPrimary
            text="Sign up"
        />
        <Button
            isPrimary={false}
            text="Sign in"
            onPress={() =>
                navigation.navigate('Login')
            }
            underlayColor='none'
        />
    </Container >
)

export default Approach