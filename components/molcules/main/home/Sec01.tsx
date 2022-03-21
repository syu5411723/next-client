import styled from "styled-components"
import { useContext } from "react"

import {Data} from "../../../../lib/data/Sec01Data"
import { DataContext } from "../../../../pages/posts/[id]"
import { Sec01Title, Sec01Image, Sec01Button, Sec01Content } from "../../../atoms/main/home/Sec01/index"

const Container = styled.div``

const RigghtWrapper = styled.div``
const LeftWrapper = styled.div``

export const Sec01 = () => {
    const { postData } = useContext(DataContext)
    console.log(postData)

    return (
        <>
            <Container>
                <LeftWrapper>
                    <Sec01Title title="test" />
                    <Sec01Content content="test" />
                    <Sec01Button text="test" />
                </LeftWrapper>
                <RigghtWrapper>
                    <Sec01Image />
                </RigghtWrapper>
            </Container>
        </>
    )
}
