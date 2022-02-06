import styled from "styled-components"
import { Sec03Button, Sec03Content, Sec03Image, Sec03Title } from "../../../atoms/main/home/sec03"

const Container = styled.div``
const RightWrapper = styled.div``
const LeftWrapper = styled.div``

export const Sec03 = () => {
    return (
        <>
            <Container>
                <RightWrapper>
                    <Sec03Image />
                </RightWrapper>
                <LeftWrapper>
                    <Sec03Title />
                    <Sec03Content />
                    <Sec03Button />
                </LeftWrapper>
            </Container>
        </>
    )
}
