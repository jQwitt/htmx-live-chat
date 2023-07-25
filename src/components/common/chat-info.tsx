// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';
import { Chat } from '@prisma/client';

import { Component } from '../../types';

interface ChatInfoProps {
    chat: Chat;
}

export const ChatInfo: Component<ChatInfoProps> = ({ chat }) => {
    const { id, title, description } = chat;

    return (
        <div class="flex flex-row items-center gap-2">
            <p>{id}</p>
            <div class="flex-col">
                <h1 class="text-3xl flex">{title}</h1>
                {description ? <p>{description}</p> : null}
            </div>
        </div>
    );
};
