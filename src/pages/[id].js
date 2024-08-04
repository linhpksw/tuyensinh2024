import Confirmation from '@/components/modal/Confirmation';
import Head from 'next/head';
import { client } from '@/lib/mongodb';
import { useEffect, useState } from 'react';
import ZaloWidget from '@/components/feature/ZaloWidget';

export default function StudentDetails({ initialData }) {
    const [data, setData] = useState(initialData);
    const registerPhone = initialData[0]?.registerPhone;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/get?registerPhone=${registerPhone}`);
                if (!response.ok) throw new Error('Failed to fetch');
                const fetchedData = await response.json();
                if (fetchedData.length === 0) {
                    console.log('No student data found for this phone number.');
                }
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setData([]);
            }
        };

        fetchData();
    }, [registerPhone]);

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
    let students;
    if (context.query.students) {
        // If students data is passed in the query, parse it and use it directly
        students = JSON.parse(context.query.students);
    } else {
        // Perform database query to fetch students
        const database = client.db(process.env.DB_NAME);
        const student = database.collection(process.env.COLLECTION_NAME);

        const query = { registerPhone: context.query.id };
        students = await student.find(query, { projection: { _id: 0 } }).toArray();

        if (students.length === 0) {
            // No students found, let Next.js handle the 404
            return {
                notFound: true, // This will trigger Next.js to show the default 404 page
            };
        }
    }

    return {
        props: {
            initialData: students,
        },
    };
}
