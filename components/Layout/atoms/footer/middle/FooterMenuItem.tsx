import React from 'react'
import styled from 'styled-components'

type Props = {
    data: any
}

const Wrapper = styled.div``
const Text = styled.p``

export const FooterMenuItem = ({data}) => {
    return (
        <Wrapper>
                        {data.map(item => <Text>{item.text}</Text>)}
        </Wrapper>
    )
}
