import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    text: string
}

const Wrapper = styled.div`
    background-color:#fff;
    &:hover {
        background-color: #333;
    }
`
const Text = styled.p``


export const Button:VFC<Props> = ({text}) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
        </Wrapper>
    )
}
