import React from 'react';
import styled from 'styled-components';

const Wrappper = styled.div``
const Text = styled.p``

const datas = ["", "", ""]


export const Sec02Item = () => {
    return (
        <>
            {datas.map(data => <Text>{data}</Text>)}
        </>
    )
}
