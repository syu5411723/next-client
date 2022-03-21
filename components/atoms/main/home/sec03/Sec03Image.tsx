import {VFC} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
const Wrapper = styled.div``

export const Sec03Image = () => {
    return (
        <Wrapper>
            <Image src="/img/icon.jpg" layout="fill" objectFit="cover" />
            
        </Wrapper>
    )
}
