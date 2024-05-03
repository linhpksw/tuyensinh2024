import { info, classInfo } from '@/lib/data';

const sendZNS = async (req, res) => {
    try {
        const { data } = req.body;
    } catch (error) {
        console.log('An error occurred in the sendEmail function:', error);
        res.status(500).send(error);
    }
};

export default sendZNS;
