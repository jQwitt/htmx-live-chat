// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';
import { Chat } from '@prisma/client';

import { Attributes, Component } from '../../types';

interface ChatInfoProps {
    chat: Chat;
}

export const ChatInfo: Component<ChatInfoProps> = ({ chat }) => {
    const { id, title, description } = chat;
    const attrs: Attributes = {
        'hx-get': `/chat/${id}`,
        'hx-target': '#root',
        'hx-swap': `innerHTML`,
    };

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
