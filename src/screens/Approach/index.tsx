import React from 'react'
import { Container, ApproachText, ApproachParagraph, Button, ButtonText, ApproachImage } from './styles'

const Approach = () => (
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
        <Button>
            <ButtonText>
                Sign in
            </ButtonText>
        </Button>
    </Container>
)

export default Approach