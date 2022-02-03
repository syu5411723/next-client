import {VFC} from 'react'
import Image from "next/image"

type Props = {
    img:string
}

export const Sec02Image:VFC<Props> = ({img}) => {
    return (
        <>
            <Image src={img} layout="fill" objectFit="cover"  />
        </>
    )
}
