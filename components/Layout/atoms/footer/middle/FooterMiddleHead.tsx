import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    data: any
}

const Wrapper = styled.div``
const Text = styled.p``

export const FooterMiddleHead: VFC<Props> = ({data}) => {
    return (
        <Wrapper>
            <Text>{data}</Text>
        </Wrapper>
    )
}
