import Confirmation from '@/components/modal/Confirmation';
import Head from 'next/head';
import { client } from '@/lib/mongodb';
import { useEffect, useState } from 'react';
import ZaloWidget from '@/components/feature/ZaloWidget';
import Cookies from 'js-cookie';

export default function StudentDetails({ initialData }) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        // Attempt to fetch data from cookies
        const fetchDataFromCookies = () => {
            const studentData = Cookies.get('studentData');
            if (studentData) {
                setData(JSON.parse(studentData));
                Cookies.remove('studentData'); // Clear the cookie immediately after reading
            } else if (initialData.length === 0) {
                // If no data in cookies, fetch data from the API
                fetchData();
            }
        };

        fetchDataFromCookies();
    }, []);

    const registerPhone = initialData[0]?.registerPhone;

    const fetchData = async (registerPhone) => {
        try {
            const response = await fetch(`/api/get?registerPhone=${registerPhone}`);
            const fetchedData = await response.json();
            setData(fetchedData);
        } catch (error) {
            console.err(error);
        }
    };

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
    }

    return {
        props: {
            initialData: students,
        },
    };
}
