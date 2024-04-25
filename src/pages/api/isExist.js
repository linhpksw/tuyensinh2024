import { client } from '@/lib/mongodb';

async function isExist(phone) {
    const database = client.db(process.env.DB_NAME);
    const student = database.collection(process.env.COLLECTION_NAME);
    const result = await student.findOne({ registerPhone: phone });

    return result !== null;
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { phone } = req.body;

        try {
            const exists = await isExist(phone);
            res.status(200).json({ exists });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while checking the phone number' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
