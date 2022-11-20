import FormGrid from '../../../../components/tailwind/FormGrid';
import Head from 'next/head'

export default function MembersUI() {
       
    return (
        <>
            <div>
                <Head>
                    <title> Member UI2 </title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <FormGrid />
        </>
    )
}