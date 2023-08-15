import { v4 as uuidv4 } from 'uuid';
import * as jwt from 'jsonwebtoken';

import * as db from '../db';

export async function getUserSessionJWT(userId: string) {
    const prisma = db.get();

    const sessionId = uuidv4();
    const session = await prisma.session.upsert({
        where: {
            userId,
        },
        update: {},
        create: {
            token: sessionId,
            expires: new Date(),
            userId,
        },
    });
    if (!session) {
        return '';
    }

    return jwt.sign({ token: sessionId }, process.env.JWT_SIGNATURE!);
}
