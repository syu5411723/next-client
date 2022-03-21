import styled from "styled-components"

const Container = styled.div``
const UpWrapper = styled.div``
const BottomWrapper = styled.div``
const List = styled.div``

const Item = styled.p``
const CopyText = styled.p``
const OfficialName = styled.p``

const Datas = ["特定商法取引表示", "ご利用規約", "個人情報保護方針"]

export const FooteyCopy = () => {
    return (
        <Container>
            <UpWrapper>
                <CopyText></CopyText>
                <List>
                    {/* {Datas.map((item) => <Item>{item}</Item>)} */}
                </List>
            </UpWrapper>
            <BottomWrapper>
                <OfficialName></OfficialName>
            </BottomWrapper>

        </Container>
    )
}
