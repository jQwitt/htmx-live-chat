import { PrismaClient } from '@prisma/client';

let _db: PrismaClient | null = null;

export function get() {
    if (_db) {
        console.warn('DB already initialized!');
        return _db;
    }

    _db = new PrismaClient();
    console.log('DB initialized :)');
    return _db;
}
