import styled from "styled-components"
import { useContext } from "react"
import { DataContext } from "../../../../pages/posts/[id]"
import { Sec01Title, Sec01Image, Sec01Button, Sec01Content } from "../../../atoms/main/home/Sec01/index"

const Container = styled.div``

const RigghtWrapper = styled.div``
const LeftWrapper = styled.div``

export const Sec01 = () => {
    const { postData } = useContext(DataContext)
    return (
        <>
            <Container>
                <LeftWrapper>
                    <Sec01Title title="" />
                    <Sec01Content content="" />
                    <Sec01Button text="" />
                </LeftWrapper>
                <RigghtWrapper>
                    <Sec01Image img="/" />
                </RigghtWrapper>
            </Container>
        </>
    )
}
