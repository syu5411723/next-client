﻿import {VFC} from 'react'
import Image from "next/image"
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
`

export const Sec01Image = () => {
    return (
        <>
            <Wrapper>
                {/* <Image src="/img/icon.jpg" layout='fill' objectFit='cover' /> */}
            </Wrapper>
        </>
    )
}