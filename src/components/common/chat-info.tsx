// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';
import { Chat } from '@prisma/client';

import { Component } from '../../types';
import { getChatWithID } from '../../helpers';

interface ChatInfoProps {
    chat: Chat;
    redirect: boolean;
}

export const ChatInfo: Component<ChatInfoProps> = ({ chat, redirect }) => {
    const { id, title, description } = chat;
    const attrs = redirect ? getChatWithID(id) : {};

    return (
        <div class="flex flex-row items-center gap-2" {...attrs}>
            <p>{id}</p>
            <div class="flex-col">
                <h1 class="text-3xl flex">{title}</h1>
                {description ? <p>{description}</p> : null}
            </div>
        </div>
    );
};
