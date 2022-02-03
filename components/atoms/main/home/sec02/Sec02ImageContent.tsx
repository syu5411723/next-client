import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    text: string
    content: string
}

const Wrapper = styled.div``
const Text = styled.h3``
const Content = styled.p``

export const Sec02ImageContent:VFC<Props> = ({text, content}) => {
    return (
        <>
            <Wrapper>
                <Text>{text}</Text>
                <Content>{content}</Content>
            </Wrapper>
        </>
    )
}
