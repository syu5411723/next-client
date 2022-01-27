import styled from "styled-components"
import { useContext } from "react"
import { DataContext } from "../../../../pages/posts/[id]"

export {Sec01Title, Sec01Image, Sec01Button, Sec01Content} from "../../../atoms/main/home/Sec01/index"

const Container = styled.div``

const RigghtWrapper = styled.div``
const LeftWrapper = styled.div``

export const Sec01 = () => {
    const {Data} = useContext(DataContext)
    return (
        <>
        <LeftWrapper>
            <Sec01Title />
            <Sec01Content />
            <Sec01Button />
        </LeftWrapper>
        <RigghtWrapper>
            <Sec01Image />
        </RigghtWrapper>
        </>
    )
}
