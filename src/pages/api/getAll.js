import { client } from '@/lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const database = client.db(process.env.DB_NAME);
            const studentsCollection = database.collection(process.env.COLLECTION_NAME);

            const query = {};
            const options = {
                projection: { _id: 0 },
            };

            const cursor = studentsCollection.find(query, options);
            const students = await cursor.toArray();

            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching data from database', error });
        } finally {
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
