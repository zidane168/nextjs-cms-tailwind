import FormGrid from '../../../../components/tailwind/FormGrid';
import Head from 'next/head'
import Admin from '../../../../layouts/Admin';
import Modal from '../../../../components/tailwind/Modal';

export default function MembersUI2() {
       
    return (
        <>
            <div>
                <Head>
                    <title> Member UI2 </title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <FormGrid />
            {/* <Modal /> */}
        </>
    )
}

MembersUI2.layout = Admin; // left sidebar