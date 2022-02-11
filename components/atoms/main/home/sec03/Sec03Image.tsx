import {VFC} from 'react'
import styled from 'styled-components'
import Image from 'next/image'

type Props = {
    img: string
}

const Wrapper = styled.div``

export const Sec03Image:VFC<Props> = ({img}) => {
    return (
        <Wrapper>
            <Image src={img} layout="fill" objectFit="cover" />
            
        </Wrapper>
    )
}
