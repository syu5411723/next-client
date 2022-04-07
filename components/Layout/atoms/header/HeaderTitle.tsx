import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const ImageWrapper = styled.div``


const HeaderTitle = () => {
    return (
        <ImageWrapper>
            <Image src="/img/icon.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
    )
}

export default HeaderTitle
