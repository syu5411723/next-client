import styled from "styled-components"
import {VFC} from "react"

import { Sec03Button, Sec03Content, Sec03Image, Sec03Title } from "../../../atoms/main/home/sec03"

type ContainerReverse = {
    reverse: boolean
}

const Container = styled.div<ContainerReverse>`
    display:flex;
    flex-direction: ${({reverse}) => reverse ? "row-reverce" : "row"};
`
const RightWrapper = styled.div``
const LeftWrapper = styled.div``

export const Sec03:VFC<ContainerReverse> = ({reverse}) => {
    return (
        <>
            <Container reverse={reverse}>
                <RightWrapper>
                    <Sec03Image img="" />
                </RightWrapper>
                <LeftWrapper>
                    <Sec03Title text="" />
                    <Sec03Content content="" />
                    <Sec03Button text="" />
                </LeftWrapper>
            </Container>
        </>
    )
}
