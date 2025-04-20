import Confirmation from '@/components/modal/Confirmation';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import ZaloWidget from '@/components/feature/ZaloWidget';
import useStudentStore from '@/stores/studentStores';

export default function StudentDetails({ initialData }) {
    const { studentData, setStudentData, clearStudentData } = useStudentStore();
    const [data, setData] = useState(studentData || initialData);

    useEffect(() => {
        // If Zustand store is empty (e.g. page refresh), fall back to SSR data
        if (!studentData && initialData) {
            setStudentData(initialData);
        }
    }, [studentData, initialData, setStudentData]);

    // OPTIONAL: Clean up when navigating away
    useEffect(() => {
        return () => {
            clearStudentData();
        };
    }, []);

    const registerPhone = data[0]?.registerPhone;

    return (
        <>
            <Head>
                <title>Câu lạc bộ Toán Ánh Sáng</title>
                <meta
                    name='description'
                    content='Trung tâm toán câu lạc bộ Ánh Sáng luyện thi toán từ lớp 8 đến lớp 12'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Confirmation data={data} onDataUpdated={setData} registerPhone={registerPhone} />

            <ZaloWidget
                oaid='2133786749915158274'
                welcomeMessage='Trung tâm có thể hỗ trợ được gì cho quý phụ huynh ạ?'
            />
        </>
    );
}

export async function getServerSideProps(context) {
    const registerPhone = context.query.id;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/students/admissions?registerPhone=${registerPhone}`
        );

        if (!res.ok) {
            return { notFound: true };
        }

        const students = await res.json();

        return {
            props: {
                initialData: students,
            },
        };
    } catch (err) {
        console.error('SSR fetch error:', err);
        return { notFound: true };
    }
}
