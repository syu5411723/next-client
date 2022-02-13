import styled from "styled-components"
import {VFC} from "react"

import { Sec03Button, Sec03Content, Sec03Image, Sec03Title } from "../../../atoms/main/home/sec03"

type ContainerReverce = {
    reverce: boolean
}

const Container = styled.div<ContainerReverce>`
    display:flex;
    flex-direction: ${({reverce}) => reverce ? "row-reverce" : "row"};
`
const RightWrapper = styled.div``
const LeftWrapper = styled.div``

export const Sec03:VFC<ContainerReverce> = ({reverce}) => {
    return (
        <>
            <Container reverce={reverce}>
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
