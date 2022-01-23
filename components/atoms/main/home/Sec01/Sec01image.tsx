import {VFC} from 'react'
import Image from "next/image"
import styled from 'styled-components'

type Props = {
    img:string
}

const Wrapper = styled.div`
`

export const Sec01Image:VFC<Props> = ({img}) => {
    return (
        <>
            <Wrapper>
                <Image src={img} layout='fill' objectFit='cover' />
            </Wrapper>
        </>
    )
}