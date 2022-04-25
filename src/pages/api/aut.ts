import { NextApiHandler } from 'next';
import { firestore } from '@app/config/firebase/admin';

const Handler: NextApiHandler = async (request, response) => {
  const data = firestore.collection('DOC').doc();

  return response.status(200).json({
    data,
  });
};

export default Handler;
