import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    content: string
}

const Wrapper = styled.div``
const Text = styled.p``

export const Sec03Content:VFC<Props> = ({content}) => {
    return (
        <Wrapper>
            <Text>{content}</Text>
            
        </Wrapper>
    )
}
