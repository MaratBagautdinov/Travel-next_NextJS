import { NextApiRequest, NextApiResponse } from 'next'

import { users } from './index'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(users.find(p => p.id.toString() === req.query.id))
}