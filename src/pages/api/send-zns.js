import { client } from '@/lib/mongodb';

const INFO = {
    api: 'https://business.openapi.zalo.me/message/template',
    templateId: '329956',
    subject: {
        'Lớp 8 chuyên toán': {
            examDate: '15:00 14/07/2024',
            enrollDate: '18/07/2024',
        },
        'Lớp 9A0 chuyên toán': {
            examDate: '15:00 02/06/2024',
            enrollDate: '04/06/2024',
        },
        'Lớp 9A1 chuyên toán': {
            examDate: '15:00 02/06/2024',
            enrollDate: '08/06/2024',
        },
        'Lớp 9A2 toán nâng cao': {
            examDate: '09/06/2024',
            enrollDate: '09/06/2024',
        },
    },
};

const sendZNS = async (req, res) => {
    try {
        const database = client.db(process.env.DB_ZALO);
        const tokenColl = database.collection(process.env.COLLECTION_TOKEN);
        const { accessToken } = await tokenColl.findOne();

        const { data } = req.body;

        const messageResults = await sendMessage(accessToken, data);

        // Check all message results for any error
        const allMessagesSentSuccessfully = messageResults.every((result) => result.error === 0);

        if (allMessagesSentSuccessfully) {
            res.status(200).send({ message: 'All messages sent successfully' });
        } else {
            // If any message failed, you might want to handle it differently
            res.status(200).send({
                message: 'Some messages failed to send',
                details: messageResults.filter((result) => result.error !== 0),
            });
        }
    } catch (error) {
        console.log('An error occurred in the sendZNS function:', error);
        res.status(500).send({ error: 'Internal server error', details: error });
    }
};

async function sendMessage(accessToken, data) {
    const headers = {
        access_token: accessToken,
        'Content-Type': 'application/json',
    };

    // Helper function to send a message
    async function sendContent(content) {
        const response = await fetch(INFO.api, {
            method: 'post',
            headers: headers,
            body: JSON.stringify(content),
        });
        return response.json();
    }

    function formatName(name) {
        return name
            .trim()
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // Process each student and send messages
    const sendPromises = data.map(async (student) => {
        const { studentName, subject, registerPhone, backupPhone, time } = student;

        let phone = '84' + backupPhone.slice(1);
        const formatTime = new Date(time).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        const content = {
            phone: phone,
            template_id: INFO.templateId,
            template_data: {
                student_name: studentName,
                register_class: subject,
                register_phone: registerPhone,
                enroll_date: INFO.subject[subject].enrollDate,
                exam_date: INFO.subject[subject].examDate,
                register_id: formatTime,
            },
        };

        let jsonResponse = await sendContent(content);

        // Retry with registerPhone if there's an error and phones are different
        if (jsonResponse.error !== 0 && backupPhone !== registerPhone) {
            content.phone = '84' + registerPhone.slice(1);
            jsonResponse = await sendContent(content);
        }

        return jsonResponse;
    });

    try {
        // Await all message send promises
        const results = await Promise.all(sendPromises);
        console.log('All messages sent, results:', results);
        return results;
    } catch (error) {
        console.error('Error sending message to user:', error);
        return false;
    }
}

export default sendZNS;
