// api/delete.js
import { client } from '@/lib/mongodb';

export default async function handler(req, res) {
    const { registerPhone } = req.body;

    try {
        const database = client.db(process.env.DB_NAME);
        const student = database.collection(process.env.COLLECTION_NAME);

        const query = { registerPhone: registerPhone };

        const result = await student.deleteMany(query);

        if (result.deletedCount === 0) {
            res.status(400).json({ status: 'error', message: 'Failed to delete student' });
            return;
        }

        res.status(200).json({ status: 'success', message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to delete student' });
    }
}
