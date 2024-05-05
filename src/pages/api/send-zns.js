import { client } from '@/lib/mongodb';

const INFO = {
    api: 'https://business.openapi.zalo.me/message/template',
    templateId: '329956',
    subject: {
        'Lớp 8 chuyên toán': {
            examDate: '15:00 2/6/2024',
            enrollDate: '18/7/2024',
        },
        'Lớp 9A0 chuyên toán': {
            examDate: '15:00 2/6/2024',
            enrollDate: '4/6/2024',
        },
        'Lớp 9A1 chuyên toán': {
            examDate: '15:00 2/6/2024',
            enrollDate: '8/6/2024',
        },
        'Lớp 9A2 toán nâng cao': {
            examDate: '9/6/2024',
            enrollDate: '9/6/2024',
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

    // Process each student and send messages
    const sendPromises = data.map(async (student) => {
        const { studentName, subject, registerPhone, backupPhone, studentId } = student;

        let phone = '84' + backupPhone.slice(1);
        const content = {
            phone: phone,
            template_id: INFO.templateId,
            template_data: {
                student_name: studentName,
                register_class: subject,
                register_phone: registerPhone,
                enroll_date: INFO.subject[subject].enrollDate,
                exam_date: INFO.subject[subject].examDate,
                register_id: studentId,
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
