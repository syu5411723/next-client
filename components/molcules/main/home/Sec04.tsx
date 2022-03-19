import styled from "styled-components"
import { Sec01Button } from "../../../atoms/main/home/Sec01"
import { Sec04Buttom } from "../../../atoms/main/home/sec04/Sec04Buttom"
import Sec04Item from "../../../atoms/main/home/sec04/Sec04Item"

const listData = [
    {
        id: 1,
        img: "/img/icon.jpg",
        content: "",
    },
    {
        id: 2,
        img: "/img/icon.jpg",
        content: "",
    },
    {
        id: 3,
        img: "/img/icon.jpg",
        content: "",
    },
    {
        id: 4,
        img: "/img/icon.jpg",
        content: "",
    },
    {
        id: 5,
        img: "/img/icon.jpg",
        content: "",
    },
]


const Container = styled.div`

`
const ListWrapper = styled.div`
    display:flex;
`
const ButtonWrapper = styled.div``
const ButtonInner = styled.div``
const ButtomWrapper = styled.div``


export const Sec04 = () => {
    return (
        <>
            <Container>
                <ListWrapper >
                    {listData.map(data => <Sec04Item img={data.img} content={data.content} />)}
                </ListWrapper>
                <ButtonWrapper>
                    <ButtonInner>
                        <Sec01Button text="Shop All" />
                    </ButtonInner>
                </ButtonWrapper>
                <ButtomWrapper>
                    <Sec04Buttom />
                </ButtomWrapper>
            </Container>
        </>
    )
}
