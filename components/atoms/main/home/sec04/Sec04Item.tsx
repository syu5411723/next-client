import { VFC } from 'react'
import Image from 'next/image'

import styled from 'styled-components'

type Props = {
    img: string
    content: string
}

const Wrapper = styled.div``
const ImageWrapper = styled.div``
const ContentWrapoer = styled.div``
const Content = styled.p``


const Sec04Item: VFC<Props> = ({ img, content }) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={img} layout="fill" objectFit="cover" />
            </ImageWrapper>
            <ContentWrapoer>
                <Content>{content}</Content>
            </ContentWrapoer>
        </Wrapper>
    )
}

export default Sec04Item