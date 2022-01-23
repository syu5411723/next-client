import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    content: string;
}
const Content = styled.p`
    font-size:16px;
`

export const Sec01Content:VFC<Props> = ({content}) => {
    return (
        <>
        <Content>{content}</Content>
        </>
    )
}