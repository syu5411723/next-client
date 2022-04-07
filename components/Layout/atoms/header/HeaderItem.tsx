import { VFC } from 'react'
import styled from 'styled-components'

type Props = {
    text: string
}


const Wrapper = styled.div``
const Item = styled.p``

const HeaderItem: VFC<Props>= ({ text }) => {
    return (
        <Wrapper>
            <Item>{text}</Item>
        </Wrapper>
    )
}

export default HeaderItem
