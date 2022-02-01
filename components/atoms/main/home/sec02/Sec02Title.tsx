import { VFC } from 'react'
import styled from 'styled-components'

type Props = {
    title: string

}

const Title = styled.p``

export const Sec02Title: VFC<Props> = ({ title }) => {
    return (
        <>
            <Title>{title}</Title>
        </>
    )
}
