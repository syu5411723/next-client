import { createContext } from 'react'
import Head from 'next/head'

import { Data } from '../../lib/data/Sec01Data';

type ContextProps = {
    Data: any
}

export const getStaticPaths = async () => {
    const paths = Data.map(data => ({
        params: {
            id: data.id
        }
    }))
}

export const getStaticProps = async (context) => {
    const data = await Data
    const { id } = context.params
    return {
        props: {
            Data,
        }
    }
}


export const DataContext = createContext({} as ContextProps)

const DetailPage = ({ Data }) => {
    return (
        <>
            <Head>

            </Head>
            <DataContext.Provider value={{Data}}>
                
            </DataContext.Provider>
            </>
    )
}

export default DetailPage
