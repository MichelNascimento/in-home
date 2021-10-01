import React from 'react'
import { Container, ApproachText, ApproachParagraph, Button, ButtonText, ApproachImage } from './styles'

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
        <Button primary>
            <ButtonText primary>
                Sign up
            </ButtonText>
        </Button>
        <Button
            onPress={() =>
                navigation.navigate('Login')
            }
            underlayColor='none'
        >
            <ButtonText>
                Sign in
            </ButtonText>
        </Button>
    </Container>
)

export default Approach