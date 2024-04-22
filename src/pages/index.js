import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/NavBar';
import Head from 'next/head';
import BackToTop from '@/components/layout/BackToTop';
import { GradeTab } from '@/components/feature/GradeTab';
import Script from 'next/script';

export default function Home() {
    return (
        <>
            <Head>
                <title>Câu lạc bộ Toán Ánh Sáng</title>
                <meta property='og:image' content='https://tuyensinh.clbanhsang.com/img/scholarship/hocbong-4.jpg' />
                <meta property='og:url' content='https://tuyensinh.clbanhsang.com/' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Câu lạc bộ Toán Ánh Sáng' />
                <meta property='og:description' content='Trung tâm học toán chất lượng cao từ lớp 8 đến lớp 12' />

                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />

            <GradeTab />

            {/* Zalo Chat Widget */}
            <div
                className='zalo-chat-widget'
                data-oaid='2133786749915158274'
                data-welcome-message='Trung tâm có thể hỗ trợ được gì cho quý phụ huynh ạ?'
                data-autopopup='2'
                data-width=''
                data-height=''></div>
            <Script src='https://sp.zalo.me/plugins/sdk.js'></Script>

            <BackToTop />

            <Footer />
        </>
    );
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get data.
    // You can do whatever you want here.
    // For now, we'll just return an empty object.

    return {
        props: {}, // will be passed to the page component as props
    };
}
