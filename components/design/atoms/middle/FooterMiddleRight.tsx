import styled from "styled-components"

const Wrapper = styled.div``
const Up = styled.p``
const Middle = styled.p``
const BottomWrapper = styled.div``
const Buttom = styled.p``
const Date = styled.p``

export const FooterMiddleRight = () => {
    return (
        <Wrapper>
            <Up>カスタマーセンター</Up>
            <Middle>0120-977-459</Middle>
            <BottomWrapper>
                <Buttom></Buttom>
                <Date></Date>
            </BottomWrapper>
        </Wrapper>
    )
}
