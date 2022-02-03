import { VFC } from "react"
import styled from "styled-components"

type Props = {
    text: string
}

const Item = styled.li``

export const Sec02Item:VFC<Props> = ({text}) => {
    return (
        <Item>
            {text}
        </Item>
    )
}
