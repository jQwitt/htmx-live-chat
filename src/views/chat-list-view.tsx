// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as elements from 'typed-html';
import { Chat } from '@prisma/client';

import { ChatInfo } from '../components';
import { Component } from '../types';
import { getChatWithID } from '../helpers';
import { FormsRoutes } from '../server/routes/forms.routes';

interface ChatListViewProps {
    chats: Chat[];
}

export const ChatListView: Component<ChatListViewProps> = ({ chats = [] }) => (
    <section class="p-2">
        <div class="flex flex-row justify-between">
            <p>username</p>
            <button
                hx-get={FormsRoutes.FORMS_CREATE_CHAT}
                hx-target="#root"
                hx-swap="outerHtml"
            >
                create
            </button>
        </div>
        <h3>Chats:</h3>
        <div class="flex flex-col gap-1">
            {chats.map((chat, i) => {
                const targetId = `chat-info-${i}`;
                const path = `/chat/${chat.id}`;

                return (
                    <div
                        {...getChatWithID(chat.id)}
                        id={targetId}
                        class="relative"
                    >
                        {ChatInfo({ chat })}
                        <button
                            class="absolute right-1 top-1 z-1"
                            hx-delete={path}
                            hx-target={'#' + targetId}
                            hx-swap="outerHTML"
                        >
                            delete
                        </button>
                    </div>
                );
            })}
        </div>
    </section>
);
