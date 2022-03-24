import {VFC} from 'react'
import styled from 'styled-components'
import { Sec02Image, Sec02ImageContent } from '../../../atoms/main/home/sec02'
import { Sec02Item } from '../../../atoms/main/home/sec02/Sec02Item'
import { Sec02Title } from '../../../atoms/main/home/sec02/Sec02Title'


type Props = {
    title: string
    data: any
    img: string
    imgText: string
    content: string
}
const data = ["",]

const Container = styled.section``
const RightWrapper = styled.div``
const LeftWrapper = styled.div``
const ListWrapper = styled.div``

export const Sec02:VFC<Props> = ({title, content, img, imgText,}) => {
    return (
        <Container>
            <LeftWrapper>
                <Sec02Title title={title} />
                <ListWrapper>
                    {data.map(item => <Sec02Item text={item} />)}
                </ListWrapper>
            </LeftWrapper>
            <RightWrapper>
                <Sec02Image />
                <Sec02ImageContent text={imgText} content={content} />
            </RightWrapper>
        </Container>
    )
}
