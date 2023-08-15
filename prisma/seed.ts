import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.chat.create({
        data: {
            title: 'Tester',
            description: 'A test chat',
        },
        select: {
            participants: true,
        },
    });

    await prisma.user.create({
        data: {
            name: 'Jack',
            password:
                '$2y$10$9kV5VkarGvKlaEFQ0dGwm.zb5s.di.ehl.yKOsSG4Tw6OCpvX3HxO% ', // taken from commandline
            chats: {
                create: [
                    {
                        title: "Jack's Room",
                        description: 'A personal room just for Jack',
                    },
                ],
            },
        },
        select: {
            id: true,
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
