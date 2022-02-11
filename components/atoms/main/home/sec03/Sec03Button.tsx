import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    text: string
}

const Wrapper = styled.div``
const Button = styled.div``
const Text = styled.p``

export const Sec03Button:VFC<Props> = ({text}) => {
    return (
        <Wrapper>
            <Button>
                <Text>{text}</Text>
            </Button>
        </Wrapper>
    )
}
